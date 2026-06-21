import { $, component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const copyUrl = $(() => {});

  return (
    <div class="px-12 py-14">
      <p class="text-4xl">Copy Url address and access the moviehub api</p>
      <input
        type="text"
        placeholder=""
        class="bg-lightColor text-2xl p-2"
        readOnly
        value="neverthelesse"
      />
      <button onClick$={copyUrl}>copy</button>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Best Movies Api | Developer | MovieHub",
  meta: [
    {
      name: "Movie Api",
      content:
        "More than 100 movies, Action,Fantasy,Korea,Chinese, America e.t.c",
    },
  ],
};
