type randomI = { _id: string; title: string };

export function random(value: randomI[]) {
  return value[Math.floor(Math.random() * value.length)].title;
}
