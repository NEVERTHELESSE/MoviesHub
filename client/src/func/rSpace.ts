export function rSpace(value: string) {
  return value.replace(/ /g, "-");
}
export function addSpace(value: string) {
  return value.replace(/-/g, " ");
}
