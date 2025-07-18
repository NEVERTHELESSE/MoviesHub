import { component$ } from "@builder.io/qwik";
import { Image } from "~/components/Image";
import { PngImage } from "~/components/PngImage";

export const Install = component$(() => {
  const lists = ["hell.jpg", "kingdom.jpg", "xena.jpg"];
  const lists2 = ["badland.jpg", "beast.jpg", "skyline.jpg"];
  return (
    <div class="mt-20 bg-tertiary py-4 lg:px-40 flex justify-around  items-center">
      <div>
        <div class="w-[25rem] h-[40rem]  relative">
          <div class="h-full   absolute bottom-4">
            <PngImage src="/png/phone2.png" />
          </div>
          <div class="w-[18rem] ml-5 mt-10 h-[94%] top-0 rounded-3xl  bg-secondary flex items-center overflow-hidden justify-center">
            <div class="w-[8rem]">
              <PngImage src="iconBig.png" />
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col">
        <button class="h-[5rem] w-[15rem] my-2">
          <PngImage src="png/play.png" />
        </button>
        <button class="h-[5rem] w-[15rem] my-2">
          <PngImage src="png/app.png" />
        </button>

        <a href="/download.apk" download>
          <PngImage src="/iconBig.png" />
          <p class="text-white text-center text-2xl">Download Now</p>
        </a>
      </div>

      <div>
        <div class="w-[25rem] h-[40rem]  relative">
          <div class="h-full  z-20 absolute bottom-4">
            <PngImage src="/png/phone2.png" />
          </div>
          <div class="w-[18rem] ml-5 mt-10 h-[94%] top-0 rounded-3xl  bg-white pt-10 overflow-hidden justify-center relative">
            <div class="w-full pl-2 flex pr-4">
              <div class="w-12">
                <PngImage src="icon.png" />
              </div>
              <input
                type="text"
                placeholder="Squid Game"
                class="shadows  px-3 rounded-full py-2 w-full"
              />
            </div>
            <div class="w-[16rem] mt-2 h-[8rem] bg-primary rounded-2xl overflow-hidden mx-4 shadow">
              <Image src="/bg/bg5.jpg" />
            </div>
            <div>
              <div class="flex px-4 justify-between my-2">
                <p>Trending</p>
                <p class="text-primary ">View All</p>
              </div>
              <div class="flex px-4">
                {lists.map((list) => (
                  <div
                    class="w-[6rem] h-[10rem] rounded-lg mr-1 overflow-hidden"
                    key={list}
                  >
                    <Image src={`movies/${list}`} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div class="flex px-4 justify-between my-2">
                <p>Trending</p>
                <p class="text-primary ">View All</p>
              </div>
              <div class="flex px-4">
                {lists2.map((list) => (
                  <div
                    class="w-[6rem] h-[10rem] rounded-lg mr-1 overflow-hidden"
                    key={list}
                  >
                    <Image src={`movies/${list}`} />
                  </div>
                ))}
              </div>
            </div>

            <div class="absolute bottom-0 flex border-t border-t-lightColor w-full z-10 bg-white justify-around p-2">
              <svg
                viewBox="0 0 24 24"
                fill="#000000"
                width={30}
                height={30}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2.5192 7.82274C2 8.77128 2 9.91549 2 12.2039V13.725C2 17.6258 2 19.5763 3.17157 20.7881C4.34315 22 6.22876 22 10 22H14C17.7712 22 19.6569 22 20.8284 20.7881C22 19.5763 22 17.6258 22 13.725V12.2039C22 9.91549 22 8.77128 21.4808 7.82274C20.9616 6.87421 20.0131 6.28551 18.116 5.10812L16.116 3.86687C14.1106 2.62229 13.1079 2 12 2C10.8921 2 9.88939 2.62229 7.88403 3.86687L5.88403 5.10813C3.98695 6.28551 3.0384 6.87421 2.5192 7.82274ZM9.44661 15.3975C9.11385 15.1508 8.64413 15.2206 8.39747 15.5534C8.15082 15.8862 8.22062 16.3559 8.55339 16.6025C9.5258 17.3233 10.715 17.75 12 17.75C13.285 17.75 14.4742 17.3233 15.4466 16.6025C15.7794 16.3559 15.8492 15.8862 15.6025 15.5534C15.3559 15.2206 14.8862 15.1508 14.5534 15.3975C13.825 15.9373 12.9459 16.25 12 16.25C11.0541 16.25 10.175 15.9373 9.44661 15.3975Z"
                    fill="#1C274C"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width={30}
                height={30}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M18 3H6C3.79086 3 2 4.79086 2 7V17C2 19.2091 3.79086 21 6 21H18C20.2091 21 22 19.2091 22 17V7C22 4.79086 20.2091 3 18 3Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M10.28 8.03994C9.19003 8.42994 9 10.5199 9 12.0399C9 13.5599 9.19003 15.5999 10.28 16.0399C11.37 16.4799 16 13.7499 16 12.0399C16 10.3299 11.44 7.61994 10.28 8.03994Z"
                    stroke="#000000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width={30}
                height={30}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="0.5"
                    d="M18 10L13 10"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M2 6.94975C2 6.06722 2 5.62595 2.06935 5.25839C2.37464 3.64031 3.64031 2.37464 5.25839 2.06935C5.62595 2 6.06722 2 6.94975 2C7.33642 2 7.52976 2 7.71557 2.01738C8.51665 2.09229 9.27652 2.40704 9.89594 2.92051C10.0396 3.03961 10.1763 3.17633 10.4497 3.44975L11 4C11.8158 4.81578 12.2237 5.22367 12.7121 5.49543C12.9804 5.64471 13.2651 5.7626 13.5604 5.84678C14.0979 6 14.6747 6 15.8284 6H16.2021C18.8345 6 20.1506 6 21.0062 6.76946C21.0849 6.84024 21.1598 6.91514 21.2305 6.99383C22 7.84935 22 9.16554 22 11.7979V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V6.94975Z"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  ></path>{" "}
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width={30}
                height={30}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle
                    cx="12"
                    cy="6"
                    r="4"
                    stroke="#1C274C"
                    stroke-width="1.5"
                  ></circle>{" "}
                  <path
                    d="M15 20.6151C14.0907 20.8619 13.0736 21 12 21C8.13401 21 5 19.2091 5 17C5 14.7909 8.13401 13 12 13C15.866 13 19 14.7909 19 17C19 17.3453 18.9234 17.6804 18.7795 18"
                    stroke="#1C274C"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
