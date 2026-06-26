export const pageHeader = {
  id: "pageHeader",
  label: "Page Header",
  icon: "page_header",
  fields: [
    {
      name: "content",
      label: "Content",
      widget: "markdown",
      required: true,
    },
    {
      name: "image",
      label: "Image",
      widget: "image",
      required: false,
    },
  ],
  pattern:
    /^{% partialWrapper "page-header\.njk", { image: "(?<image>.*?)", class: "(?<class>.*?)" } %}(?<content>.*?){% endpartialWrapper %}$/ms,
  fromBlock: function (match) {
    return {
      image: match?.groups?.image,
      class: match?.groups?.class,
      content: match?.groups?.content,
    };
  },
  toBlock: function ({ image, class: className, content }) {
    return `{% partialWrapper "page-header.njk", { image: "${image || ""}", class: "${className || ""}" } %}
${(content || "").trim()}
{% endpartialWrapper %}`;
  },
  toPreview: function ({ image, class: className, content }) {
    return `<div class="${className || ""}">
<img src="${image || ""}" alt="" width="300" style="display: block; margin-bottom: 1rem" />

${(content || "").trim()}
</div>`;
  },
};
