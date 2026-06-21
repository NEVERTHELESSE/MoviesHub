export function limits(width: number) {
  if (width < 640) {
    return 8;
  } else if (width < 1380 && width > 640) {
    return 6 * 2;
  } else {
    return 16;
  }
}
