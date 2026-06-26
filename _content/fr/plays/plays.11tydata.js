export default {
  layout: "play.njk",
  eleventyComputed: {
    playProjects: (data) => {
      if (!data.orfeoId) return { future: [], past: [] };
      const all = data.orfeo.projects.filter(
        (p) => p.venue_data?.name && p.spectacle?.pk === data.orfeoId,
      );
      return {
        // all,
        future: all.filter((p) => !p.past),
        past: all.filter((p) => p.past),
      };
    },
  },
};
