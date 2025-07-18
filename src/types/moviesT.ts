import type { castT } from "./castT";

export interface commentT {
  username: string;
  comment: string;
  pics: string;
  date: string;
}

export interface movieT {
  _id: string;
  title: string;
  posterUrl: string;
  rate: number;
  description: string;
  director: string;
  comments: commentT[];
  continent: string;
  country: string;
  year: string;
  genres: string[];
  createdAt: string;
  casts: castT[];
}
