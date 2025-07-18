import { component$ } from "@builder.io/qwik";
import { navigates } from "./Navigates";
import { useLocation } from "@builder.io/qwik-city";

export const Navigation = component$(() => {
  const path = useLocation().url.pathname;

  return (
    <section class="w-full sm:w-[50%]">
      <nav class=" w-full hidden sm:flex justify-around">
        {navigates.map((navigate) => (
          <a
            href={navigate.to}
            key={navigate.id}
            title={navigate.title}
            class={`hover:border-b  rounded-lg p-1 duration-500 ${
              path == navigate.to && "bg-primary px-1  border-b-primary"
            }`}
          >
            {navigate.title}
          </a>
        ))}
      </nav>
      <nav class="w-full flex sm:hidden justify-around">
        {navigates.map((navigate) => (
          <a href={navigate.to} key={navigate.id} title={navigate.title}>
            {navigate.title}
          </a>
        ))}
      </nav>
    </section>
  );
});
