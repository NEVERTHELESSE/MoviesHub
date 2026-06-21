import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { castT } from "~/types/castT";

type propsT = {
  casts: castT[];
};

export const Casts = component$(({ casts }: propsT) => {
  return (
    <>
      {casts.map(({ name, profileUrl }, index: number) => (
        <Link href={`/${name}`} key={index} class="w-10 h-10">
          <img
            src={`casts/${profileUrl}`}
            width={100}
            height={100}
            alt={name}
          />
        </Link>
      ))}
    </>
  );
});
