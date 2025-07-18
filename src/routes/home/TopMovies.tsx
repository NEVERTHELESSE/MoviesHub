import {
  component$,
  useSignal,
  useOnWindow,
  useVisibleTask$,
  useTask$,
} from "@builder.io/qwik";
import { Title } from "~/components/Title";
import { TopMoviesFilter } from "./TopMoviesFilter";
import { rSpace } from "~/func/rSpace";
import { Link } from "@builder.io/qwik-city";
import { movieT } from "~/types/moviesT";
import { Rates } from "~/components/Rates";
import { Image } from "~/components/Image";
import MovieLoading from "~/loading/MovieLoading";
import axios from "axios";
import { limits } from "~/func/Limits";
const api = import.meta.env.VITE_API;
// export const useData = routeLoader$(async () => {
//   const response = await await axios({
//       url: `${api}topMovies`,
//       params: { f: '', l: limits() },
//     }).then((res) => res.data);;
//   return response.data;
// });

export const TopMovies = component$(() => {
  const selected = useSignal("");
  const data = useSignal<any>([]);

  useTask$(async ({ track }) => {
    track(() => selected.value);
    await await axios({
      url: `${api}topMovies`,
      params: { f: selected.value, l: limits(1560) },
    }).then((res) => (data.value = res.data));
  });

  return (
    <section class="w-full py-4 px-2 flex flex-col border-b border-primary shadow">
      <Title specificTitle={`Top ${selected.value} Movies🔥`} />
      <TopMoviesFilter selected={selected} />
      {data.value.length == 0 ? (
        <MovieLoading />
      ) : (
        <>
          <div class="flex flex-wrap justify-around ">
            {data.value.map(({ _id, title, rate, posterUrl }: movieT) => (
              <Link
                key={_id}
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
