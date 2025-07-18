import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

type propT = { src: string };

export const Image = component$(({ src }: propT) => {
  return (
    <img
      src={"https://ik.imagekit.io/ugyn4if2f/movieHub/" + src}
      width={100}
      height={100}
      loading="lazy"
      //     srcset={`
      //   https://ik.imagekit.iougyn4if2f/movieHub/${src}?tr=w-300,q-30 300w,
      //   https://ik.imagekit.iougyn4if2f/movieHub/${src}?tr=w-600,q-30 600w
      // 1`}
      alt=""
      class="h-full bg-gradient-to-t to-primary from-secondary w-full object-cover"
    />
  );
});
