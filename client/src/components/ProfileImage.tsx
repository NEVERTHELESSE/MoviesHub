import { component$ } from "@builder.io/qwik";
import { Image } from "./Image";
type propsT = { profilePics: string; username: string };

export const ProfileImage = component$(({ profilePics, username }: propsT) => {
  if (profilePics != "") {
    return (
      <div
        class="w-full cursor-pointer h-full bg-primary text-center flex items-center justify-center"
        title={username}
      >
        <p class="uppercase text-white  text-2xl">{profilePics}</p>
      </div>
    );
  } else {
    return <Image src="iconBig.png" />;
  }
});
