import { $, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Title } from "../../components/Title";
import { rSpace } from "../../func/rSpace";
import { Image } from "../../components/Image";
import { ScrollButton } from "../../components/ScrollButton";

import { topMovies } from "../../data/topMovies";

export const CountryMovies = component$(() => {
  const left = $(() => {});
  const right = $(() => {});
  const kdrama = topMovies.slice(5, 14);
  const Cdrama = topMovies.reverse();
  const Africandrama = topMovies.reverse().slice(5, 14);
  const countries = [
    { id: "1", title: "KDrama", movies: kdrama },
    { id: "2", title: "CDrama", movies: Cdrama },
    { id: "3", title: "African Drama", movies: Africandrama },
  ];

  return (
    <>
      {countries.map((country, index) => (
        <div key={index}>
          <Title specificTitle={country.title} />
          <div class="flex ">
            {country.movies.map((movie, index) => (
              <Link
                href={`/movie?${rSpace(movie.title)}`}
                class="min-w-[20rem] m-2 h-[30rem] out-shadows rounded-2xl overflow-hidden"
                key={index}
              >
                <Image src={`movies/${movie.posterUrl}`} />
              </Link>
            ))}
          </div>
          <div class="relative flex items-center justify-center mt-16">
            <ScrollButton leftFunction={left} rightFunction={right} />
          </div>
        </div>
      ))}
    </>
  );
});
