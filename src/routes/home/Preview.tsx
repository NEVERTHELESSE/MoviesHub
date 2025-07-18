import { component$ } from "@builder.io/qwik";
import { Image } from "~/components/Image";
import { movieT } from "~/types/moviesT";

type propsT = {
  allMovies: movieT[];
};

export const Preview = component$(({ allMovies }: propsT) => {
  return (
    <div class="absolute bottom-0 flex right-0  items-end">
      {allMovies.map((movie: movieT, index: number) => (
        <div
          class={`w-[3rem] md:w-[4rem] ml-1 sm:ml-2 rounded-lg shadows out-shadows ${
            index == 0 ? "h-[5rem] md:h-[11rem]" : "h-[5rem] md:h-[9rem]"
          } overflow-hidden cursor-pointer`}
          key={index}
        >
          <Image src={`bg/${movie.posterUrl}`} />
        </div>
      ))}
    </div>
  );
});
