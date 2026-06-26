const CONTENT_DIR = process.env.CONTENT_DIR || "_content";
const ELEVENTY_ROOT = process.env.ELEVENTY_ROOT;

const {
  pages,
  creativeWorks,
  events,
  articles,
  spreadPageSetup,
  commonCollectionFields,
  bodyMarkdownField,
  generatePageField,
} = await import(
  `${ELEVENTY_ROOT}/src/config-11ty/plugins/cms-config/config.js`
);

const pos = 4; // Just after page name field

//  PLAY
const additionalPlayFields = [
  {
    name: "orfeoId",
    label: "Orfeo ID",
    widget: "number",
    value_type: "int",
    hint: "The spectacle `pk` from the Orfeo API, used to link dates and representations",
    required: false,
    i18n: "duplicate",
  },
  {
    name: "cover",
    label: "Cover Image",
    widget: "image",
    required: false,
    i18n: true,
  },
  {
    ...bodyMarkdownField,
    name: "announcement",
    label: "Annonce",
    widget: "markdown",
    required: false,
    i18n: true,
  },
  {
    name: "representationType",
    label: "Type de représentation",
    widget: "string",
    hint: "e.g. Théâtre, Danse, Cirque…",
    required: false,
    i18n: true,
    dataField: true,
  },
  {
    name: "yearStart",
    label: "Année de création",
    widget: "number",
    value_type: "int",
    required: false,
    i18n: "duplicate",
  },
  {
    name: "audienceAge",
    label: "Public cible",
    widget: "string",
    hint: "e.g. 10-14ans",
    required: false,
    i18n: true,
  },
  {
    name: "duration",
    label: "Durée",
    widget: "string",
    hint: "e.g. 60 minutes + 15-20' de bord de scène",
    required: false,
    i18n: true,
  },
  {
    name: "setupDuration",
    label: "Durée de montage",
    widget: "string",
    hint: "e.g. 4 à 6h",
    required: false,
    i18n: true,
  },
  {
    name: "peopleOnTour",
    label: "Personnes en tournée",
    widget: "number",
    value_type: "int",
    required: false,
    i18n: "duplicate",
  },
  {
    name: "audienceCapacity",
    label: "Jauge",
    widget: "string",
    hint: "e.g. 100 pers",
    required: false,
    i18n: true,
  },
  {
    name: "stageDimensions",
    label: "Dimensions du plateau",
    widget: "string",
    hint: "e.g. 9 x 13 x 3,8m",
    required: false,
    i18n: "duplicate",
  },
  {
    name: "folio",
    label: "Dossier de présentation",
    widget: "file",
    required: false,
    i18n: true,
    media_folder: `/${CONTENT_DIR}/_files/{{slug}}`,
    public_folder: "/assets/files/{{slug}}",
  },
  {
    name: "picturesKit",
    label: "Kit photos",
    widget: "file",
    required: false,
    i18n: true,
    media_folder: `/${CONTENT_DIR}/_files/{{slug}}`,
    public_folder: "/assets/files/{{slug}}",
  },
  {
    name: "techSpecs",
    label: "Fiche technique",
    widget: "file",
    required: false,
    i18n: true,
    media_folder: `/${CONTENT_DIR}/_files/{{slug}}`,
    public_folder: "/assets/files/{{slug}}",
  },
  {
    name: "teaserLink",
    label: "Lien bande-annonce",
    widget: "string",
    hint: "URL embed YouTube ou Vimeo",
    required: false,
    i18n: "duplicate",
  },
  {
    name: "pressReviewsDoc",
    label: "Dossier de presse",
    widget: "file",
    required: false,
    i18n: true,
    media_folder: `/${CONTENT_DIR}/_files/{{slug}}`,
    public_folder: "/assets/files/{{slug}}",
  },
  {
    ...bodyMarkdownField,
    name: "summary",
    label: "Résumé",
    widget: "markdown",
    required: false,
    i18n: true,
  },
  {
    name: "pressReviews",
    label: "Revue de presse",
    widget: "list",
    required: false,
    collapsed: true,
    i18n: true,
    allow_reorder: true,
    summary: "{{quote | truncate(60)}}",
    fields: [
      {
        name: "quote",
        label: "Citation",
        widget: "text",
        required: true,
        i18n: true,
      },
      {
        name: "cite",
        label: "Source",
        widget: "string",
        hint: "e.g. Le soir, JMW, 30/12/19",
        required: false,
        i18n: true,
      },
    ],
  },
  {
    name: "prizes",
    label: "Prix",
    widget: "list",
    required: false,
    collapsed: true,
    i18n: true,
    allow_reorder: true,
    summary: "{{prize}}",
    field: {
      name: "prize",
      label: "Prix",
      widget: "string",
      required: true,
      i18n: true,
    },
  },
  {
    name: "creditsIntro",
    label: "Crédits - Intro",
    widget: "text",
    hint: "e.g. Création collective de la Compagnie 3637",
    required: false,
    i18n: true,
  },
  {
    name: "credits",
    label: "Crédits",
    widget: "keyvalue",
    required: false,
    i18n: true,
    key_label: "Rôle",
    value_label: "Personne(s)",
  },
  {
    ...bodyMarkdownField,
    name: "approach",
    label: "Démarche",
    widget: "markdown",
    required: false,
    i18n: true,
  },
  {
    name: "gallery",
    label: "Galerie",
    widget: "image",
    required: false,
    multiple: true,
    i18n: true,
  },
  {
    ...bodyMarkdownField,
    name: "more",
    label: "Autour du spectacle",
    widget: "markdown",
    required: false,
    i18n: true,
  },
  {
    ...bodyMarkdownField,
    name: "thanks",
    label: "Remerciements & production",
    widget: "markdown",
    required: false,
    i18n: true,
  },
  {
    name: "coverBottom",
    label: "Image de bas de page",
    widget: "image",
    required: false,
    i18n: true,
  },
];

const playFields = [
  ...creativeWorks.fields.slice(0, pos),
  ...additionalPlayFields,
  // ...creativeWorks.fields.slice(pos), // if we keep all fields
  ...creativeWorks.fields.slice(pos + 2), // to remove `content` and `sections`
];

//  THEATER EVENT
const additionalTheaterEventFields = [];
const theaterEventFields = [
  ...events.fields.slice(0, pos),
  ...additionalTheaterEventFields,
  ...events.fields.slice(pos),
];
const theaterEventsCollection = {
  ...events,
  ...spreadPageSetup("theaterEvents"),
  icon: "curtains",
  fields: theaterEventFields,
};

//  ACTUS
const actusFields = [
  ...commonCollectionFields,
  {
    name: "datePublished",
    label: "Date Published",
    widget: "datetime",
    type: "date",
    required: true,
    i18n: true,
    default: "{{now}}",
  },
  {
    name: "title",
    label: "Title",
    widget: "string",
    required: false,
    i18n: true,
    preview: false,
  },
  bodyMarkdownField,
  {
    ...bodyMarkdownField,
    name: "footer",
    label: "Footer",
    buttons: ["bold", "italic"],
    editor_components: ["link"],
  },
  {
    ...generatePageField,
    widget: "hidden",
    dataField: {
      widget: generatePageField.widget,
    },
  },
];

const actusCollection = {
  ...articles,
  ...spreadPageSetup("actus"),
  icon: "newspaper",
  identifier_field: "datePublished",
  // slug: "{{datePublished}}",
  path: "actus/{{datePublished | date('YYYY-MM-DD')}}-{{title | truncate(20)}}",
  summary: "{{datePublished}} - {{title | truncate(20)}}",
  sortable_fields: {
    fields: ["datePublished"],
    default: {
      field: "datePublished",
      direction: "descending",
    },
  },
  view_groups: {},
  thumbnail: undefined,
  reorder: false,
  fields: actusFields,
};

//  MEDIA
const additionalMediaFields = [];
const mediaFields = [
  ...pages.fields.slice(0, pos),
  ...additionalMediaFields,
  ...pages.fields.slice(pos),
];

export const collections = [
  {
    ...creativeWorks,
    ...spreadPageSetup("plays"),
    icon: "theater_comedy",
    // folder: `${CONTENT_DIR}`,
    // path: "pages/{{slug}}",
    // media_folder: `/${CONTENT_DIR}/_images`,
    media_folder: `/${CONTENT_DIR}/_images/{{slug}}`,
    public_folder: "/_images/{{slug}}",
    fields: playFields,
  },
  theaterEventsCollection,
  actusCollection,
  {
    ...pages,
    ...spreadPageSetup("medias"),
    icon: "live_tv",
    fields: mediaFields,
  },
];

export const singletons = [];
