import { component$ } from "@builder.io/qwik";
import { ProfileImage } from "~/components/ProfileImage";
import { Title } from "~/components/Title";
import { cleanDate } from "~/constants/cleanDate";
import { commentT } from "~/types/moviesT";

type propsT = {
  comments: commentT[];
};

export const Comment = component$(({ comments }: propsT) => {
  return (
    <section>
      <Title specificTitle="Comment" />
      {comments.map(({ username, pics, comment, date }, index) => (
        <div
          class="w-full my-2 rounded-2xl shadows p-2 flex items-center"
          key={index}
        >
          <div class="w-[3rem] rounded-full overflow-hidden h-[3rem]">
            <ProfileImage profilePics={pics} username={username} />
          </div>
          <div class="ml-2 w-full">
            <div class="md:flex justify-between w-full items-center">
              <div>
                <h3 class="font-bold">{username}</h3>
                <h4>{comment}</h4>
              </div>
              <i>{cleanDate(date)}</i>
            </div>
            <div class="flex md:w-[50%]  justify-around ">
              <button class="py-1 px-3 rounded-lg hover:bg-lightColor duration-200">
                Like👍🏽
              </button>
              <button class="py-1 px-3 rounded-lg hover:bg-lightColor duration-200">
                Good💖
              </button>
              <button class="py-1 px-3 rounded-lg hover:bg-lightColor duration-200">
                Unlike👎🏽
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
});
