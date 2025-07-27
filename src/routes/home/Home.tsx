import { component$, $, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Introduction } from "./Introduction";
import { Preview } from "./Preview";
import { banners } from "./banners";
import { TopMovies } from "./TopMovies";
import { CastFilter } from "./CastFilter";
import { Install } from "./Install";
import { TopCast } from "./TopCast";
import { CountryMovies } from "./CountryMovies";
import { LatestMovie } from "./Lastest";
import { Genres } from "./Genres";
import { Connect } from "./Connect";
import { ScrollButton } from "../../components/ScrollButton";

export const Home = component$(() => {
  const id = useSignal(true);

  const allMovies = useSignal(banners);
  const moveRight = $(() => {
    id.value = !id.value;
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

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    setInterval(() => {
      moveRight();
    }, 5000);
  });

  return (
    <section class="w-[100vw]">
      <div
        class=" w-[100vw] h-[100vh] h-[100dvh] flex  overflow-hidden bg-gradient-to-t from-primary to-secondary bg-center bg-contain object-contain bg-no-repeat sticky"
        id="bg"
      >
        <Introduction allMovies={allMovies.value} id={id.value} />
        <ScrollButton leftFunction={moveLeft} rightFunction={moveRight} />
        <Preview allMovies={allMovies.value} />
      </div>
      <TopMovies />
      <CastFilter />
      <Install />
      <TopCast />
      <CountryMovies />

      <LatestMovie />
      <Genres />
      <Connect />
    </section>
  );
});
