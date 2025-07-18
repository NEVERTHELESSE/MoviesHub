import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Image } from "~/components/Image";
import { ScrollButton } from "~/components/ScrollButton";
import { Title } from "~/components/Title";
import { casts } from "~/data/casts";
import { rSpace } from "~/func/rSpace";

export const CastFilter = component$(() => {
  const scroll = useSignal(20);
  const limit = 20;
  const moveLeft = $(() => {
    scroll.value = scroll.value + limit;
  });
  const moveRight = $(() => {
    scroll.value = scroll.value - limit;
  });

  return (
    <section class="p-2 flex flex-col items-center justify-center ">
      <Title specificTitle="Filter by Casts 👥" />
      <div class="flex flex-col">
        <div
          class="flex overflow-x-scroll w-full duration-700 "
          id="scroll"
          style={{
            transform: `translateX(${scroll}rem)`,
          }}
        >
          {casts.map((cast, index) => (
            <Link
              href={`/cast?${rSpace(cast.name)}`}
              class="rounded-lg mx-1 shadows overflow-hidden hover:scale-105 duration-300"
              key={index}
            >
              <div class="w-[10rem] h-[10rem] min-w-[10rem]">
                <Image src={`casts/${cast.profileUrl}`} />
              </div>
              <p class="font-bold p-2" id="limit1">
                {cast.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div class="relative flex items-center justify-center bottom-[-4rem]">
        <ScrollButton leftFunction={moveLeft} rightFunction={moveRight} />
      </div>
    </section>
  );
});
