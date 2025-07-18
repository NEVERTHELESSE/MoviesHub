import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "~/components/Image";
import { Title } from "~/components/Title";

export const Genres = component$(() => {
  const genres = [
    { id: "1", title: "action", imageUrl: "action.jpg" },
    { id: "2", title: "horror", imageUrl: "horror.jpg" },
    { id: "3", title: "fantasy", imageUrl: "fantasy.jpg" },
    { id: "4", title: "funny", imageUrl: "funny.jpg" },
    { id: "5", title: "zombie", imageUrl: "zombie.jpg" },
    { id: "6", title: "romance", imageUrl: "romance.jpg" },
    { id: "6", title: "kids", imageUrl: "kid.jpg" },
  ];

  return (
    <div class="p-8">
      <Title specificTitle="Filter by Genres" />
      <div class="flex flex-wrap justify-center">
        {genres.map((genre, index) => (
          <Link
            href={`/category?${genre.title}`}
            class="w-[10rem] out-shadows h-[10rem] rounded-2xl flex items-center justify-center  relative m-2 overflow-hidden"
            key={index}
          >
            <Image src={`genres/${genre.imageUrl}`} />
            <div class="absolute text-2xl bg-black w-full text-white font-bold text-center">
              <p class="capitalize">{genre.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
});
