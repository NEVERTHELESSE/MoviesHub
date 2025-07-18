export function cleanDate(value: string) {
  try {
    return value.split("T")[0];
  } catch (e) {
    return null;
  }
}
