// ORFEO_API_KEY available in environment variables
import Fetch from "@11ty/eleventy-fetch";

const BASE_URL = "https://orfeoapp.com/api";
const ORFEO_DELAY = process.env.ORFEO_DELAY
  ? parseInt(process.env.ORFEO_DELAY)
  : 300;

/**
 * Fetch all pages of a paginated Orfeo endpoint.
 * Returns a flat array of all `results` across pages.
 */
async function fetchAllPages(endpoint, params = {}) {
  const apiKey = process.env.ORFEO_API_KEY;
  if (!apiKey) throw new Error("Missing ORFEO_API_KEY environment variable");

  const fetchOptions = {
    headers: { Authorization: `Token ${apiKey}` },
  };

  const searchParams = new URLSearchParams({ page_size: 100, ...params });
  let url = `${BASE_URL}${endpoint}?${searchParams}`;
  const results = [];

  while (url) {
    const page = await Fetch(url, {
      duration: "1h",
      type: "json",
      fetchOptions,
    });
    results.push(...page.results);
    url = page.next;
  }

  return results;
}

/**
 * Derives audience type from a performance title.
 * "sco" or "repr sc" (any case) anywhere in title → "school", else "public".
 */
function audienceFromTitle(title = "") {
  return /sco|repr sc/i.test(title) ? "school" : "public";
}

/**
 * Derives audience type from the planning event's "Type de représentation"
 * custom field ("Scolaire" → "school", "TP" → "public"),
 * falling back to title inference when absent or unrecognized.
 */
function audienceFromPlanningEvent(planningEvent, title) {
  const type = planningEvent?.custom_fields?.type_de_representation;
  if (type === "Scolaire") return "school";
  if (type === "TP") return "public";
  return audienceFromTitle(title);
}

/**
 * "performance" planning events.
 * `custom_fields` holds audience info in the "Type de représentation" field.
 * A planning event's pk matches the pk of the corresponding entry in
 * project.performances (Performance is a simplified planning event serializer).
 */
async function fetchPlanningEvents() {
  return fetchAllPages("/planning_event/", {
    activity_type: "performance",
    // is_cancelled: false,
  });
}

/**
 * Projects in Orfeo = one venue booking / run, contains individual performances.
 */
async function fetchProjects() {
  const [projects, planningEvents] = await Promise.all([
    fetchAllPages("/project/", {
      // is_published: true,
      // ordering: "start_date",
    }),
    fetchPlanningEvents(),
  ]);
  const planningEventByPk = new Map(planningEvents.map((e) => [e.pk, e]));
  const now = new Date();
  return projects.map((project) => {
    // console.log({ project });
    const performances = project.performances.map((perf) => {
      const planningEvent = planningEventByPk.get(perf.pk) ?? null;
      if (!planningEvent) {
        console.warn(
          `No planning event found for performance ${perf.pk} "${perf.title}"`,
        );
      }
      return {
        // ...planningEvent,
        ...perf,
        is_past: perf.end_datetime ? new Date(perf.end_datetime) < now : false,
        is_cancelled: planningEvent?.is_cancelled ?? false,
        audience: audienceFromPlanningEvent(planningEvent, perf.title),
      };
    });
    const perfDates = performances
      .map((p) => p.start_datetime?.slice(0, 10))
      .filter(Boolean)
      .sort();
    const firstPerfDate = perfDates[0] ?? null;
    const lastPerfDate = perfDates[perfDates.length - 1] ?? null;
    const is_past = performances.every((p) => p.is_past);
    return {
      ...project,
      past: project.end_date ? new Date(project.end_date) < now : false,
      sameDay: firstPerfDate === lastPerfDate,
      sameMonth: firstPerfDate?.slice(0, 7) === lastPerfDate?.slice(0, 7),
      hasSchool: performances.some((p) => p.audience === "school"),
      hasPublic: performances.some((p) => p.audience === "public"),
      perfTimes: [
        ...new Set(performances.map((p) => p.start_datetime?.slice(11, 16))),
      ].sort(),
      firstPerfDate,
      lastPerfDate,
      is_past,
      performances,
      ignore: !firstPerfDate,
    };
  });
}

/**
 * Spectacles in Orfeo = the actual plays / productions.
 */
async function fetchSpectacles() {
  return fetchAllPages("/spectacle/", {
    is_archived: false,
  });
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/**
 * Wraps eleventy-fetch to detect cache hits.
 * Returns { data, fromCache: boolean }
 */
async function cachedFetch(url, options) {
  const result = await Fetch(url, {
    ...options,
    returnType: "response",
  });

  // eleventy-fetch sets `cache: "hit"` when serving from cache
  const fromCache = result.cache === "hit";

  return { data: result.body, fromCache };
}

/**
 * Like Promise.all(items.map(fn)) but with a max concurrency.
 * Preserves input order in the output.
 * Only adds delay between network fetches, not cache hits.
 */
async function mapLimit(items, limit, fn, delayMs = ORFEO_DELAY) {
  const results = new Array(items.length);
  let i = 0;
  let networkFetches = 0;

  async function worker() {
    while (i < items.length) {
      const idx = i++;
      const result = await fn(items[idx]);
      results[idx] = result;

      // Only delay if this was a network fetch (not from cache)
      // and if there are more items to process
      if (result?.fromCache === false && i < items.length) {
        networkFetches++;
        await sleep(delayMs);
      }
    }
  }

  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

async function fetchStructure(pk) {
  const apiKey = process.env.ORFEO_API_KEY;
  const { data, fromCache } = await cachedFetch(
    `${BASE_URL}/structure/${pk}/`,
    {
      duration: "2w",
      type: "json",
      fetchOptions: { headers: { Authorization: `Token ${apiKey}` } },
    },
  );
  return { data, fromCache };
}

export default async function () {
  const [spectacles, projects] = await Promise.all([
    fetchSpectacles(),
    fetchProjects(),
  ]);

  const futureOrganizerPks = [
    ...new Set(
      projects
        .filter((p) => !p.is_past)
        .flatMap((p) => p.contracts.map((c) => c.organizer?.pk))
        .filter(Boolean),
    ),
  ];
  const futureStructures = await mapLimit(
    futureOrganizerPks,
    3,
    fetchStructure,
  );
  const futureStructureByPk = Object.fromEntries(
    futureStructures.map((s) => [s.data.pk, s.data]),
  );

  const enrichedProjects = projects.map((project) => {
    const organizerPk = project.contracts?.[0]?.organizer?.pk;
    const futureStructure = organizerPk
      ? futureStructureByPk[organizerPk]
      : null;
    const organizer_contact_infos =
      futureStructure?.contact_infos ||
      project.contracts?.[0]?.organizer?.contact_infos ||
      [];
    // web_addresses is only available on the detailed `structure` object
    const web_addresses = futureStructure?.web_addresses ?? [];

    return {
      ...project,
      organizer_web_addresses: web_addresses,
      organizer_contact_infos,
      venueUrl: web_addresses[0]?.address ?? null,
      venueAddress:
        [
          project.venue_data?.address1,
          [project.venue_data?.zipcode, project.venue_data?.city]
            .filter(Boolean)
            .join(" "),
        ]
          .filter(Boolean)
          .join(", ") || null,
      mapsUrl: project.venue_data.city
        ? `https://www.google.com/maps/search/${encodeURIComponent(
            [
              project.venue_data.name,
              project.venue_data.address1,
              project.venue_data.zipcode,
              project.venue_data.city,
            ]
              .filter(Boolean)
              .join(", "),
          )}`
        : null,
    };
  });

  return { spectacles, projects: enrichedProjects };
}
