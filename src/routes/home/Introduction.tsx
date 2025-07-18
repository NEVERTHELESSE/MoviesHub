import { component$, useSignal } from "@builder.io/qwik";
import { WatchDownload } from "~/components/WatchDownload";
import { Casts } from "~/components/Casts";
import { Rates } from "~/components/Rates";
import { movieT } from "~/types/moviesT";
import { Image } from "~/components/Image";

type propsT = { allMovies: movieT[] };
const imageApi = import.meta.env.IMAGE_API;

export const Introduction = component$(({ allMovies }: propsT) => {
  const id = useSignal(true);

  return (
    <div class="flex ">
      {allMovies.map((movie, index) => (
        <section class="relative  duration-500 text-white " key={index}>
          <main
            id={id ? "zoom" : "zoom1"}
            class="min-w-[100vw] h-[100dvh] bg-gradient-to-t from-orange-900 to-blue-800 "
          >
            <Image src={`bg/${movie.posterUrl}`} />
          </main>
          <div class="absolute p-2 md:p-4 lg:p-10 top-0  h-full flex">
            <div class="md:w-[70%] h-full overflow-hidden   flex flex-col justify-around pt-16">
              <div>
                <Rates rates={movie.rate} color="#ffffff" />
                <h1
                  class="text-3xl lg:text-[4rem] font-bold leading-tight left"
                  id="limit1"
                >
                  {movie.title}
                </h1>
                <p class="lg:text-2xl left">
                  Director:{" "}
                  <i class="text-primary font-bold bottom">{movie.director}</i>
                </p>
                <p>Cast</p>
                <div class="flex my-3 left">
                  <Casts casts={movie.casts} />
                </div>
                <div>
                  <p>Genres:</p>
                  <div class="flex bottom">
                    {movie.genres.map((genre, index) => (
                      <h3 class="font-bold mr-3 capitalize" key={index}>
                        {genre}
                      </h3>
                    ))}
                  </div>
                </div>
                <p class="my-2 bottom" id="limit4">
                  {movie.description}
                </p>
                <WatchDownload downloadLink={`bg/${movie.posterUrl}`} />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
});
