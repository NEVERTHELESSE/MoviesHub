import { $, component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "~/components/Image";
import { ScrollButton } from "~/components/ScrollButton";
import { Title } from "~/components/Title";
import { rSpace } from "~/func/rSpace";
import { movieT } from "~/types/moviesT";

type propsT = { title: string; movies: movieT[] };
export const CountryMovies = component$(({ title, movies }: propsT) => {
  const left = $(() => {});
  const right = $(() => {});

  return (
    <div>
      <Title specificTitle={title} />
      <div class="flex ">
        {movies.map((movie, index) => (
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
  );
});
