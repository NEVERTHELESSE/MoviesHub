function Loading() {
  return (
    <div class=" rounded-lg  md:rounded-2xl overflow-hidden mx-1 md:mx-4  my-2 w-[20rem]   bg-gray-300 relative  shadows h-[25rem] flex flex-col">
      <div class="bg-gray-500 h-[10rem] rounded-t-[3rem] m-1 self-end animate-pulse absolute bottom-0 w-full"></div>
    </div>
  );
}
const number: number[] = [];

export default function MoviesLoading() {
  return (
    <div class="flex flex-wrap justify-around">
      {number.map((i) => (
        <Loading key={i} />
      ))}
    </div>
  );
}
