export function newLine() {
  return this.env.filters.safe("\n");
}

export function htmlLineBreak() {
  return this.env.filters.safe("<br>");
}
