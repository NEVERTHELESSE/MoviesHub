import { component$ } from "@builder.io/qwik";
import { Image } from "~/components/Image";
import { Title } from "~/components/Title";
import { topMovies } from "~/data/topMovies";

export const TopCast = component$(() => {
  return (
    <section class="p-12 flex flex-col items-center">
      <Title specificTitle="Top Cast👤" />
      <div class="flex">
        <div class="w-[20rem] h-[20rem] rounded-2xl overflow-hidden ">
          <Image src="casts/cast4.jpg" />
        </div>
        <div class="ml-5 w-[30rem]">
          <h3 class="lg:text-4xl">Polly Hawkins</h3>
          <h4 class="text-3xl my-3">
            Date of Birth: <b>25 - 05 - 1990</b>{" "}
          </h4>
          <p class="text-2xl my-6">Top Movies</p>
          <div class="flex flex-wrap">
            {topMovies.slice(0, 10).map((topMovie, index) => (
              <div
                class="w-[4rem] h-[4rem] hover:scale-[2] duration-700"
                key={index}
              >
                <Image src={`/movies/${topMovie.posterUrl}`} />
              </div>
            ))}
          </div>
          <button class="p-2 font-bold bg-primary my-2 rounded-lg ">
            View all movies
          </button>
        </div>
      </div>
    </section>
  );
});
