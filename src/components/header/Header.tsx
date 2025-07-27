/* eslint-disable qwik/no-use-visible-task */
import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Navigation } from "./Navigation";
import { UserInfo } from "./UserInfo";
import { PngImage } from "../PngImage";
import { ProfileImage } from "../ProfileImage";
import { SearchQuery } from "./SearchQuery";

const Header = component$(() => {
  // const location = window.location.pathname;
  const path = useSignal("hi");

  const search = useSignal(true);
  const userInfo = useSignal({
    username: "",
    profilePics: "",
    isLoading: true,
  });

  useVisibleTask$(() => {
    window.addEventListener("offline", () => {
      alert("you are offline");
    });
  });

  return (
    <header
      class={`fixed p-2 sm:px-6 w-full bg-[#0000006c] flex items-center z-20 justify-between ${
        path.value.includes("auth") && "hidden"
      } shadows text-white glow`}
    >
      <a
        href="/"
        class="flex p-1 rounded-lg hover:bg-lightColor duration-100 items-center "
      >
        <div class="w-6 h-6">
          <PngImage src="iconBig.png" />
        </div>
        <h3 class="hidden sm:flex lg:text-2xl font-bold">
          movie
          <span class="bg-primary  px-1 ml-1 rounded-lg shadows">Hub</span>
        </h3>
      </a>
      <button onClick$={() => (search.value = !search.value)}>
        {search.value ? "🔍" : "🏠"}{" "}
      </button>
      {search.value ? <Navigation /> : <SearchQuery />}

      {userInfo.value.isLoading && (
        <>
          {userInfo.value.username == "" ? (
            <UserInfo />
          ) : (
            <details class="relative">
              <summary class="w-[2.5rem] list-none h-[2.5rem] rounded-full overflow-hidden">
                <ProfileImage
                  profilePics={userInfo.value.profilePics}
                  username={userInfo.value.username}
                />
              </summary>
              <button
                class="absolute top-12 w-max bg-tertiary px-2 cursor-pointer"
                onClick$={() => {
                  window.localStorage.clear();
                  window.location.reload();
                }}
              >
                Log Out
              </button>
            </details>
          )}
        </>
      )}
    </header>
  );
});

export default Header;
