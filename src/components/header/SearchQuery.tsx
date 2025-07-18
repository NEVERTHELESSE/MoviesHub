import { rSpace } from "../../func/rSpace";
import axios from "axios";
import {
  $,
  component$,
  useSignal,
  type QwikSubmitEvent,
} from "@builder.io/qwik";
import { SearchMovie } from "./SearchMovie";
import { random } from "~/constants/random";
import { useLocation } from "@builder.io/qwik-city";
import SpinnerLoading from "~/loading/SpinnerLoading";

export const SearchQuery = component$(() => {
  const query = useSignal("");

  const search = $((e: QwikSubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.pathname = `/s?${rSpace(
      (query.value = query.value != "" ? query.value : holder)
    )}`;
  });

  const posts = useSignal([]);
  const api = import.meta.env.VITE_API;
  const loading = useSignal(false);
  const isLoading = useSignal(true);
  const changeSearchQuery = $(
    async (e: InputEvent & { target: HTMLInputElement }) => {
      query.value = e.target.value;
      loading.value = true;
      setTimeout(async () => {
        await axios({
          url: `${api}searchM`,
          params: { s: e.target.value },
        }).then((res) => (posts.value = res.data));
        loading.value = false;
      }, 1000);
    }
  );

  const location = useLocation().url.pathname;
  // useTask$(async ({ track }) => {
  //   track(() => query.value);
  //   await axios({ url: `${api}searchM`, params: { s: query.value } }).then(
  //     (res) => (posts.value = res.data)
  //   );
  // });
  // useTask$(({ track }) => {
  //   track(() => location);
  //   query.value = "";
  // });

  // const { data, isLoading, error } = useSWR("title", fetcher);

  // useTask$(async ({ track }) => {
  //   track(() => query.value);
  //   query.value = "";
  //   const res = await axios({
  //     url: `${api}searchM`,
  //     params: { s: query.value },
  //   });
  //   posts.value = res.data;
  // });
  const holder = isLoading.value ? "Movie Hub" : random(posts.value);

  return (
    <div class="relative w-full sm:w-[50%] flex flex-col items-center">
      <form class="w-full" onSubmit$={search}>
        <span class="absolute left-4 top-2">🔍</span>
        <input
          type="search"
          placeholder={holder}
          value={query.value}
          class="w-full py-2 px-12 rounded-full  font-bold bg-lightColor shadows placeholder:text-white placeholder:capitalize"
          onInput$={changeSearchQuery}
        />
      </form>
      {query.value != "" && <SearchMovie posts={posts} />}
      {loading.value && <SpinnerLoading />}
    </div>
  );
});
