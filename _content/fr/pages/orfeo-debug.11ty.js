export const data = {
  status: "inactive",
  permalink: "/debug/orfeo.json",
  layout: null,
  eleventyExcludeFromCollections: true,
};

export function render({ orfeo }) {
  return JSON.stringify(orfeo, null, 2);
}
