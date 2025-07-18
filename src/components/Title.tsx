import { component$ } from "@builder.io/qwik";

type propsT = { specificTitle: string };
export const Title = component$(({ specificTitle }: propsT) => {
  return (
    <h3 class="text-2xl lg:text-3xl font-bold text-center my-2 sm:my-8 capitalize">
      {specificTitle}
    </h3>
  );
});
