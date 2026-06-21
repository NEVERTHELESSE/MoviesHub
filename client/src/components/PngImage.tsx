import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

type propT = { src: string };

export const PngImage = component$(({ src }: propT) => {
  const location = useLocation().url.origin;

  return (
    <img
      src={location + "/" + src}
      alt=""
      class="h-full  w-full object-cover"
      width={100}
      height={100}
    />
  );
});
