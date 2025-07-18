import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "~/components/Image";
import { rSpace } from "~/func/rSpace";
import { movieT } from "~/types/moviesT";

type propsT = { movies: movieT[] };

export const AllMovies = component$(({ movies }: propsT) => {
  return (
    <>
      {movies.map(({ posterUrl, title, rate, _id, director, year }: movieT) => (
        <Link
          href={`/movie?${rSpace(title)}`}
          class="w-[20rem]  rounded-2xl overflow-hidden h-[25rem] m-3 relative"
          key={_id}
        >
          <Image src={`movies/${posterUrl}`} />
          <div class="absolute bottom-0 p-4 rounded-t-[3rem] border-t text-white bg-[#000000b1] w-full ">
            <div class="flex">
              <div class="flex flex-col">
                <p>Title:</p>
                <p>Director:</p>
                <p>Year:</p>
                <p>Rate:</p>
              </div>
              <div class="ml-4">
                <p id="limit1" class="font-bold">
                  {title}
                </p>
                <p id="limit1">{director}</p>
                <p>{year}</p>
                <p>{rate}</p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
});
