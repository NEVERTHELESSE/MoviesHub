import { $, component$, useSignal } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";
import { PngImage } from "~/components/PngImage";

export default component$(() => {
  const userInfo = useSignal({
    username: "",
    email: "",
    password: "",
    confirm: "",
  });

  const changeInput = $((e: InputEvent & { target: HTMLInputElement }) => {
    userInfo.value = { ...userInfo, [e.target.name]: e.target.value };
  });
  const create = $((e) => {
    e.preventDefault();
  });

  return (
    <section class="w-full h-[100vh] flex items-center justify-center">
      <form
        class="w-[30rem] rounded-lg p-4 bg-primary flex flex-col items-center"
        onSubmit={create}
      >
        <div class="w-20 h-20">
          <PngImage src="/iconBig.png" />
        </div>

        <input
          type="text"
          placeholder="Username"
          class="p-4 bg-lightColor rounded-lg w-full my-2 capitalize"
          required
          minLength={3}
          name="username"
          onChange$={changeInput}
        />
        <input
          type="email"
          required
          placeholder="Email Address"
          class="p-4 bg-lightColor rounded-lg w-full my-2"
          name="email"
          onChange$={changeInput}
        />
        <input
          type="password"
          required
          placeholder="Password"
          class="p-4 bg-lightColor rounded-lg w-full my-2"
          minLength={6}
          name="password"
          onChange$={changeInput}
        />
        <input
          type="password"
          name="confirm"
          required
          minLength={6}
          placeholder="Confirm Password"
          class="p-4 bg-lightColor rounded-lg w-full my-2"
          onChange$={changeInput}
        />
        <button class="p-4 bg-lightColor bg-secondary w-full rounded-lg text-white ">
          Create Account
        </button>
        <p>Already have an account?😍</p>
        <Link href="/auth/signin" class="px-4 py-2 bg-tertiary text-white">
          Login
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
