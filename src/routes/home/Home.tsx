import { component$, $, useSignal } from "@builder.io/qwik";
import { Introduction } from "./Introduction";
import { Preview } from "./Preview";
import { ScrollButton } from "~/components/ScrollButton";
import { banners } from "./banners";
import { TopMovies } from "./TopMovies";
import { CastFilter } from "./CastFilter";
import { Install } from "./Install";
import { TopCast } from "./TopCast";
import { CountryMovies } from "./CountryMovies";
import { topMovies } from "~/data/topMovies";
import { LatestMovie } from "./Lastest";
import { Genres } from "./Genres";
import { Connect } from "./Connect";

export const Home = component$(() => {
  const allMovies = useSignal(banners);
  const moveRight = $(() => {
    // setId((prev) => !prev);

    const removeItem = allMovies.value[0];
    const otherItems = allMovies.value.slice(1, allMovies.value.length);
    const removeAndOther = [...otherItems, removeItem];
    allMovies.value = removeAndOther;
  });
  const moveLeft = $(() => {
    const removeItem = allMovies.value[0];
    const otherItems = allMovies.value.slice(1, allMovies.value.length);
    const removeAndOther = [removeItem, ...otherItems];
    allMovies.value = removeAndOther;
  });

  const kdrama = topMovies.slice(5, 14);
  const Cdrama = topMovies.reverse();
  const Africandrama = topMovies.reverse().slice(5, 14);
  const countries = [
    { id: "1", title: "KDrama", movies: kdrama },
    { id: "2", title: "CDrama", movies: Cdrama },
    { id: "3", title: "African Drama", movies: Africandrama },
  ];

  return (
    <section class="w-[100vw">
      <div
        class=" w-[100vw] h-[100vh] h-[100dvh] flex  overflow-hidden bg-gradient-to-t from-primary to-secondary bg-center bg-contain object-contain bg-no-repeat sticky"
        id="bg"
      >
        <Introduction allMovies={allMovies.value} />
        <ScrollButton leftFunction={moveLeft} rightFunction={moveRight} />
        <Preview allMovies={allMovies.value} />
      </div>
      <TopMovies />
      <CastFilter />
      <Install />
      <TopCast />
      {countries.map((country, index) => (
        <CountryMovies
          title={country.title}
          key={index}
          movies={country.movies}
        />
      ))}
      <LatestMovie />
      <Genres />
      <Connect />
    </section>
  );
});
