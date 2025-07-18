import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type downloadLinkT = { downloadLink: string };

export const WatchDownload = component$(({ downloadLink }: downloadLinkT) => {
  return (
    <div class="flex my-10">
      <button class=" mr-2  bg-primary rounded-lg p-2  ">Watch Movie▶️</button>
      <a
        href={downloadLink}
        download
        class=" bg-secondary rounded-lg p-2 sm:px-4 sm:py-4 shadows text-white"
      >
        Download Movie✅
      </a>
    </div>
  );
});
