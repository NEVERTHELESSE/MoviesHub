/* eslint-disable qwik/no-use-visible-task */
import { $, component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import axios from "axios";
import { ProfileImage } from "~/components/ProfileImage";
import { addSpace } from "~/func/rSpace";

export const AddComment = component$(() => {
  const comment = useSignal("What a nice movie");
  const userInfo = {
    username: "",
    pics: "",
    comment: "",
  };
  // let search = useLocation().search.split("?")[1];
  let search = "home";
  search = addSpace(search);
  const api = import.meta.env.VITE_API;
  useVisibleTask$(() => {});

  const comments = $((e) => {
    e.preventDefault();
    axios.patch(`${api}addComment?t=${search}`, {
      userInfo,
    });
  });

  return (
    <form class="relative w-full flex items-center" onSubmit$={comments}>
      <div class="absolute w-[2rem] h-[2rem] md:w-[3rem] md:h-[3rem] rounded-full overflow-hidden left-3">
        <ProfileImage
          username={userInfo.username}
          profilePics={userInfo.pics}
        />
      </div>
      <input
        type="text"
        onChange$={(e: InputEvent & { target: HTMLInputElement }) =>
          (comment.value = e.target.value)
        }
        value={comment.value}
        class="w-full py-5  pl-[4.5rem] rounded-full pr-[8rem] my-3 bg-lightColor shadows"
        placeholder={`${userInfo.username} What a fantastic movie`}
      />
      <button class="py-2 p-2 md:px-8 bg-primary rounded-full font-bold text-white absolute right-3">
        Send
      </button>
    </form>
  );
});
