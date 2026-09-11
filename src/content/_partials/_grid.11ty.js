export default function ({
  content,
  type,
  gap,
  widthWrap,
  columns,
  widthColumnMin,
  widthColumnMax,
  class: className,
  tag,
}) {
  const gridItemRegex = /class=["'][^"']*\bitem-grid\b[^"']*["']/g;
  const childrenNb = (content?.match(gridItemRegex) || []).length;
  const layoutClass = childrenNb > 3 ? "grid-fluid" : "switcher";
  // `columns` is a shorthand for `<column-width> || <column-count>`, so the two
  // distinct CMS knobs compose into a single value. Width must come first.
  // width only -> fluid count; count only -> exactly N; both -> >=width, max N.
  const columnsFauxMasonry =
    type === "faux-masonry"
      ? [widthColumnMin, columns].filter(Boolean).join(" ") || undefined
      : undefined;
  const styles = {
    "--columns": columns,
    "--gap": gap,
    "--width-column-min": widthColumnMin,
    "--width-column-max": widthColumnMax,
    "--width-wrap": widthWrap,
    "--columns-faux-masonry": columnsFauxMasonry,
  };
  let styleStr = Object.entries(styles)
    .filter(([key, value]) => value)
    .map(([key, value]) => `${key}: ${value};`)
    .join(" ");
  styleStr = styleStr ? `style="${styleStr}"` : "";

  return `<${tag || "div"} class="layout area main list-grid ${type || layoutClass} ${className || ""}" ${styleStr}>
${content}
</${tag || "div"}>`;
}
