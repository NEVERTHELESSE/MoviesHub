import { component$ } from "@builder.io/qwik";
import { sorts } from "~/constants/sorts";

type propsT = { selected: { value: string } };
export const TopMoviesFilter = component$(({ selected }: propsT) => {
  return (
    <div class="flex  my-3">
      {sorts.map(({ sort, title }) => (
        <button
        key={sort}
          onClick$={() => (selected.value = sort)}
          class={`p-2 cursor-pointer min-w-max mx-2 hover:bg-tertiary duration-300 ${
            sort == selected.value ? "bg-secondary" : "bg-primary"
          } rounded-2xl text-white`}
        >
          {title == "" ? "All" : title}
        </button>
      ))}
    </div>
  );
});
