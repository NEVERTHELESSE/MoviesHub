import { component$ } from "@builder.io/qwik";
import { Home } from "./home/Home";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <Home />
    </>
  );
});

export const head: DocumentHead = {
  title: "MovieHub",
  meta: [
    {
      name: "Homes of Movies",
      content:
        "More than 100 movies, Action,Fantasy,Korea,Chinese, America e.t.c",
    },
  ],
};
