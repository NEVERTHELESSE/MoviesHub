import { component$, useSignal } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { PngImage } from "~/components/PngImage";

export default component$(() => {
  const userInfo = useSignal({
    email: "",
    password: "",
  });

  return (
    <section class="w-full h-[100vh] flex items-center justify-center">
      <form class="w-[30rem] rounded-lg p-4 bg-primary flex flex-col items-center">
        <div class="w-20 h-20">
          <PngImage src="/iconBig.png" />
        </div>

        <input
          type="email"
          required
          placeholder="Email Address"
          class="p-4 bg-lightColor rounded-lg w-full my-2"
          name="email"
          onChange$={(e: InputEvent & { target: HTMLInputElement }) =>
            (userInfo.value.email = e.target.value)
          }
        />
        <input
          type="password"
          required
          placeholder="Password"
          class="p-4 bg-lightColor rounded-lg w-full my-2"
          minLength={6}
          name="password"
          onChange$={(e: InputEvent & { target: HTMLInputElement }) =>
            (userInfo.value.password = e.target.value)
          }
        />

        <button class="p-4 bg-lightColor bg-secondary w-full rounded-lg text-white ">
          Login
        </button>
        <p>Don't have an account?😍</p>
        <Link href="/auth/signup" class="px-4 py-2 bg-tertiary text-white">
          Create Account
        </Link>
      </form>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Create Account | MovieHub",
  meta: [
    {
      name: "Login to Movie MovieHUb",
      content:
        "More than 100 movies, Action,Fantasy,Korea,Chinese, America e.t.c",
    },
  ],
};
