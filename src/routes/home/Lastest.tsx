import { component$ } from "@builder.io/qwik";
import { Image } from "../../components/Image";
import { PngImage } from "../../components/PngImage";
import { Title } from "../../components/Title";

export const LatestMovie = component$(() => {
  return (
    <section class="flex items-center flex-col">
      <Title specificTitle="Latest Movies" />
      <div class="flex ">
        <div class="w-[30rem] h-[30rem]">
          <Image src="movies/ballerina.jpg" />
        </div>
        <div class="w-[30rem] h-[30rem] mx-2">
          <PngImage src="top/user.png" />
        </div>
      </div>
    </section>
  );
});
