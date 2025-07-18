import { component$ } from "@builder.io/qwik";
import { Image } from "../Image";
import { rSpace } from "~/func/rSpace";
import { movieT } from "~/types/moviesT";

type propT = { posts: { value: movieT[] } };
export const SearchMovie = component$(({ posts }: propT) => {
  return (
    <div class="absolute top-12  w-full">
      {posts.value?.map(({ _id, title, posterUrl, director, year }: movieT) => (
        <a
          class="flex shadows bg-gray-500  w-full my-1 rounded-2xl overflow-hidden justify-center"
          key={_id}
          href={`/movie?${rSpace(title)}`}
        >
          <div class=" flex items-center w-full ">
            <div class="w-[10rem] h-[8rem] ">
              <Image src={`movies/${posterUrl}`} />
            </div>
            <div class="flex flex-col ml-2">
              <div class=" text-2xl">
                <h3>{title}</h3>
              </div>
              <p>Year: {year}</p>
              <p>
                Director: <span class="font-bold">{director}</span>
              </p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
});

// useVisibleTask$(async () => {
//   const res = await axios({ url: `${api}searchM`, params: { s: query } });
//   post.value = res.data;
// });
