import { $, component$, useSignal } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import axios from "axios";
import { Title } from "../../../components/Title";
import { Image } from "../../../components/Image";
import { Casts } from "../../../components/Casts";
import { WatchDownload } from "../../../components/WatchDownload";
import { Comment } from "../Comment";
import { AddComment } from "../AddComment";
import SuggestLoading from "../../../loading/SuggestLoading";

const api = import.meta.env.VITE_API;

export const useData = routeLoader$(async (requestEvent) => {
  try {
    const response = await axios({
      url: `${api}movie`,
      params: { t: requestEvent.query },
    });
    return response.data;
  } catch (e) {
    console.log(e);
  }
});

export default component$(() => {
  const showFull = useSignal(false);

  const toggleShowFull = $(() => {
    showFull.value = !showFull.value;
  });

  const data = useData();
  return (
    <div class="pt-12 sm:py-[4rem] px-2  flex flex-col items-center justify-between w-full">
      {/* <pre>{data.value, null, 2}</pre> */}
      <Title specificTitle={data.value.title} />
      <div class="flex justify-around">
        <div class="overflow-x-hidden flex flex-col  lg:flex-row rounded-2xl shadows w-[50%] flex-wrap ">
          <div
            class="w-full h-[30rem]  overflow-hidden cursor-pointer  duration-1000"
            onClick$={toggleShowFull}
          >
            <Image src={`movies/${data.value.posterUrl}`} />
          </div>
          <div class="w-full p-2 lg:p-6 ">
            <div class="flex text-2xl">
              <div class="flex flex-col">
                <p>Title:</p>
                <p>Director:</p>
                <p>Year:</p>
                <p>Genre:</p>
              </div>
              <div class="ml-4">
                <p id="limit1" class="font-bold">
                  {data.value.title}
                </p>
                <p id="limit1">{data.value.director}</p>
                <p id="limit1">{data.value.year}</p>
                <p id="limit1">{data.value.genres}</p>
              </div>
            </div>
            <h2 class=" text-2xl">Top Casts</h2>
            <div class="flex p-2 flex-wrap">
              <Casts casts={data.value.casts} />
            </div>
            <p class="my-4 text-2xl">{data.value.description.slice(0, 300)}</p>
            <WatchDownload downloadLink={`/movies/${data.value.posterUrl}`} />
            {data.value.comments.length > 0 ? (
              <Comment comments={data.value.comments} />
            ) : (
              <p>No Comment yet🙈, Be the first to Comment👇🏽</p>
            )}
            <AddComment />
          </div>
        </div>
        <div class="w-[25rem]">
          {/* <SuggestMovie genres={data.value.genres} title={'Blae'} /> */}
          <SuggestLoading />
        </div>
      </div>

      {/*
      <div 
      >
        <>
          {!isLoading ? (
            <>
              <div class="flex flex-col items-center justify-center w-full overflow-hidden lg:w-[50%] rounded-2xl  shadows"> */}
      {/* 
               
               {/* 
                  <h2 class=" text-2xl">Top Casts</h2>
                  <div class="flex p-2 flex-wrap">
                    <Casts casts={data.cast} />
                  </div> */}
      {/* <p class="my-4 text-2xl">
                    {data.value.description.slice(0, 300)}
                  </p>
                  <WatchDownload
                    downloadLink={`/movies/${data.value.posterUrl}`}
                    title={data.value.title}
                    rate={data.value.rate}
                  /> */}

      {/* </div> */}
      {/* <div>
                <SuggestMovie genres={data.value.genres} title={search} />
              </div>
              {showFull && (
                <FullScreen
                  profile={data.value.profileUrl}
                  hide={toggleShowFull}
                />
              )} */}
      {/* </>
          ) : (
            "loading"
          )}
        </>
      </div> */}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Movies | Movies Hub",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
