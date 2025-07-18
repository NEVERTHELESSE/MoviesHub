import { component$ } from "@builder.io/qwik";

type propsT = {
  leftFunction: any;
  rightFunction: any;
  // rightFunction: MouseEventHandler;
};

export const ScrollButton = component$(
  ({ leftFunction, rightFunction }: propsT) => {
    return (
      <div class="flex absolute bottom-20 items-center sm:bottom-3">
        <button
          class="bg-gray-500 w-[2rem] md:w-[3rem] md:ml-10 h-[2rem] md:h-[3rem] rounded-full md:text-4xl hover:bg-gray-700 duration-500 text-white"
          onClick$={leftFunction}
        >
          {"<"}
        </button>
        <button
          class="bg-gray-500  text-white w-[2rem] md:w-[3rem] ml-4 md:ml-10 h-[2rem] md:h-[3rem] rounded-full md:text-4xl hover:bg-gray-700 duration-500"
          onClick$={rightFunction}
        >
          {">"}
        </button>
      </div>
    );
  }
);
