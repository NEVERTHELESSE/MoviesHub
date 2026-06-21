export type castInterface = {
  id: string;
  name: string;
  profileUrl: string;
};

export type bannerT = {
  id: string;
  title: string;
  animId: string;
  posterUrl: string;
  description: string;
  trailerUr: string;
  genres: string[];
  rate: number;
  director: string;
  casts: castInterface[];
};
