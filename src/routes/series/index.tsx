import {
  $,
  component$,
  useSignal,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import axios from "axios";
import { Image } from "~/components/Image";
import { series } from "~/data/series";
import { rSpace } from "~/func/rSpace";

export default component$(() => {
  const scroll = useSignal(70);
  const selected = useSignal(0);
  const category = useSignal(series[selected.value].genres);
  const allSeries = useSignal(series);
  const moveLeft = $(() => {
    // scroll.value = scroll.value + 70;
    const remove = allSeries.value[0];
    const remaining = allSeries.value.slice(1, allSeries.value.length);
    allSeries.value = [...remaining, remove];
    selected.value =
      (selected.value + 1 + allSeries.value.length) % allSeries.value.length;
    category.value = allSeries.value[selected.value + 1].genres;
  });

  useVisibleTask$(() => {
    const interval = setInterval(() => {
      moveLeft();
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });
  const api = import.meta.env.VITE_API;
  const movies = useSignal([]);
  useTask$(async ({ track }) => {
    track(() => category.value);
    await await axios({
      url: `${api}topMovies`,
      params: { s: category.value },
      // }).then((res) => console.log(res.data));
    }).then((res) => (movies.value = res.data));
  });

  return (
    <div class="py-14   ">
      {/* <button onClick$={moveLeft}>move</button> */}
      <div class="flex items-center justify-center relative">
        <div
          class="flex duration-700"
          style={{
            transform: `translateX(-${scroll.value - 15}vw)`,
          }}
        >
          {allSeries.value.map((list) => (
            <div
              class="flex min-w-[70%] h-[35rem] mt-4 relative p-1 rounded-2xl overflow-hidden"
              key={list.id}
            >
              <div class="w-full h-full rounded-2xl overflow-hidden bg-blue-400">
                <Image src={`bg/${list.posterUrl}`} />
              </div>
              <div class="absolute bottom-4 w-full bg-[#00000066]  p-12">
                <h1 class="text-6xl font-bold text-white">{list.title}</h1>
              </div>
            </div>
          ))}
        </div>
        <div class="flex absolute bottom-1">
          {series.map((banner, index) => (
            <div
              key={banner.id}
              class={`w-3 h-3 ${index == selected.value ? "bg-secondary" : "bg-primary"}  rounded-full mx-1`}
            ></div>
          ))}
        </div>
      </div>
      <h2 class="text-3xl mx-4">{series[selected.value].describe}</h2>
      <div class="p-8 flex">
        {movies.value.map((movie, index) => (
          <Link
            class="min-w-[20rem] mr-2 h-[15rem] "
            key={index}
            href={`/movie?${rSpace(movie.title)}`}
          >
            <Image src={`/movies/${movie.posterUrl}`} />
          </Link>
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Series",
  meta: [
    {
      name: "Homes of Movies Series",
      content: "More than 100+ Movies Series",
    },
  ],
};
