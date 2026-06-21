/* eslint-disable qwik/no-use-visible-task */
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { TopMoviesFilter } from "./TopMoviesFilter";
import { Title } from "../../components/Title";
import MovieLoading from "../../loading/MovieLoading";
import { movieT } from "../../types/moviesT";
import { Link } from "@builder.io/qwik-city";
import { rSpace } from "../../func/rSpace";
import { Image } from "../../components/Image";
import { Rates } from "../../components/Rates";
import { topMovies } from "~/data/topMovies";
// const api = import.meta.env.VITE_API;

interface topMoviesInterface {
  id: string;
  title: string;
  posterUrl: string;
  rate: number;
  description: string;
}

export const TopMovies = component$(() => {
  const selected = useSignal("");
  // const data = useSignal<any>([]);
  const data = topMovies;

  // useVisibleTask$(async ({ track }) => {
  //   track(() => selected.value);
  //   axios({
  //     url: `${api}topMovies`,
  //     // params: { f: selected.value, l: limits(1560) },
  //   }).then((res) => (data.value = res.data));
  // });

  return (
    <section class="w-full py-4 px-2 flex flex-col border-b border-primary shadow">
      <Title specificTitle={`Top ${selected.value} Movies🔥`} />
      <TopMoviesFilter selected={selected} />
      {data.length == 0 ? (
        <MovieLoading />
      ) : (
        <>
          <div class="flex flex-wrap justify-around ">
            {data
              .filter(() => selected.value == "")
              .splice(0, 20)
              .map(({ id, title, rate, posterUrl }: topMoviesInterface) => (
                <Link
                  key={id}
                  href={`/movie?${rSpace(title)}`}
                  class=" rounded-lg  md:rounded-2xl overflow-hidden pb-2 mx-1 md:mx-4  my-2 w-full   xs:w-[14rem] lg:w-[18rem]"
                >
                  <div class=" bg-primary xs:h-[15rem] lg:h-[22rem] duration-700 hover:scale-y-105 hover:scale-x-110 cursor-pointer">
                    <Image src={`movies/${posterUrl}`} />
                  </div>
                  <div class="p-2">
                    <p class="text-right font-bold" id="limit1">
                      {title}
                    </p>
                    <Rates rates={rate} color="#000000" />
                  </div>
                </Link>
              ))}
          </div>
          <Link
            href={
              selected.value == "" ? "/movies" : `movies?f${selected.value}`
            }
            class="bg-primary self-center px-4 py-2 w-max rounded-lg text-white hover:bg-secondary duration-500 my-6"
          >
            Browse All {selected} Movies
          </Link>
        </>
      )}
    </section>
  );
});
