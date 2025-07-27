import { component$, useSignal, useTask$ } from "@builder.io/qwik";
import { type DocumentHead } from "@builder.io/qwik-city";
import MoviesLoading from "~/loading/MoviesLoading";
import { AllMovies } from "./AllMovies";
import axios from "axios";
import { limits } from "~/func/Limits";

export default component$(() => {
  const api = import.meta.env.VITE_API;
  const isDown = useSignal(false);

  const movies = useSignal([]);
  useTask$(async ({ track }) => {
    track(() => isDown.value);
    await axios({
      url: `${api}movies`,
      params: { f: "", l: limits(1560) },
    }).then((res) => (movies.value = res.data));
  });

  return (
    <section class="flex flex-wrap py-[5rem] px-4 justify-between">
      {movies.value.length == 0 ? (
        <MoviesLoading />
      ) : (
        <AllMovies movies={movies.value} />
      )}
    </section>
  );
});

export const head: DocumentHead = {
  title: "Movies | Movies Hub",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
