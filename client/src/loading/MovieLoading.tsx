import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { limits } from "../func/Limits";

function Loading() {
  return (
    <div class=" rounded-lg  md:rounded-2xl overflow-hidden pb-2 mx-1 md:mx-4  my-2 w-full   xs:w-[14rem] lg:w-[18rem] bg-gray-300 shadows flex flex-col">
      <div class="xs:h-[15rem] lg:h-[22rem] bg-gray-400 animate-pulse"></div>
      <div class="w-[50%] bg-gray-500 h-6 rounded-full m-1 self-end animate-pulse"></div>
      <div class="w-[60%] bg-gray-500 h-6 rounded-full m-1 animate-pulse"></div>
    </div>
  );
}

const MovieLoading = component$(() => {
  const number: number[] = [];
  const limit = useSignal<number>(0);
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    limit.value = limits(window.innerWidth);
  });

  for (let i = 0; i < 30; i++) {
    number.push(i);
  }
  return (
    <div class="flex flex-wrap justify-around">
      {number.map((_, index) => (
        <Loading key={index} />
      ))}
    </div>
  );
  // return <Loading />;
});

export default MovieLoading;
