import { component$, useSignal, $, QwikSubmitEvent } from "@builder.io/qwik";
import axios from "axios";
import { Image } from "~/components/Image";
import { Title } from "~/components/Title";
import { prevData } from "~/constants/dataPrev";
import { optionField } from "~/data/connect";

export const Connect = component$(() => {
  const data = useSignal(prevData);
  const api = import.meta.env.VITE_API;

  const submitMessage = $(async () => {
    await axios({ url: `${api}notify`, data, method: "POST" }).then(
      (res) => {}
    );
  });
  const changeInfo = $((e: InputEvent & { target: HTMLInputElement }) => {
    data.value = { ...data.value, [e.target.name]: e.target.value };
  });

  return (
    <section class="border-t-2 border-t-primary bg-primary p-8 flex text-white flex-col ">
      <Title specificTitle="Get in Touch - Notify🔔 When New Movies is Out" />
      <div class="flex justify-center">
        <div
          // onSubmit$={submitMessage}
          class="flex mx-2 flex-col w-[30rem] bg-secondary text-white rounded-2xl p-6"
        >
          {optionField.map(({ id, holder, label, name }) => (
            <div key={id}>
              <label for="" class="">
                {label}
              </label>
              <input
                type="text"
                required
                placeholder={holder}
                class="w-full p-4  rounded-lg font-bold bg-lightColor my-2 shadows "
                onChange$={changeInfo}
                name={name}
              />
            </div>
          ))}
          <label for="">Your Message</label>
          <textarea
            id=""
            required
            rows={4}
            class="w-full p-4  rounded-lg font-bold bg-lightColor my-2 shadows "
            name="message"
            onChange$={(e: InputEvent & { target: HTMLInputElement }) =>
              (data.value = { ...data.value, message: e.target.value })
            }
          ></textarea>
          <button
            onClick$={submitMessage}
            class="bg-primary py-3 rounded-lg my-2"
          >
            Submit
          </button>
        </div>
        <div class="w-[30rem]   rounded-2xl overflow-hidden mx-2">
          <Image src="/movies/cover.jpg" />
        </div>
      </div>
    </section>
  );
});
