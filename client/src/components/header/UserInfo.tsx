import { component$ } from "@builder.io/qwik";

export const UserInfo = component$(() => {
  const user = null;
  return (
    <section class="w-[15rem]">
      {user ? (
        "hello user"
      ) : (
        <>
          <div class="hidden md:flex ">
            <a href="/auth/signin" class="bg-primary  lg:px-2 rounded-lg mx-1 ">
              Login
            </a>
            <a href="/auth/signup" class="bg-secondary p-1  rounded-lg mx-1 ">
              Create an Account
            </a>
          </div>
          <p class="flex md:hidden">user</p>
        </>
      )}
    </section>
  );
});
