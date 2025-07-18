function Loading() {
  return (
    <div class="flex items-center rounded-2xl overflow-hidden shadows my-2 h-[7rem] w-full">
      <div class="w-[8rem] h-full md:w-[10rem] bg-gray-400 animate-pulse"></div>
      <div class="flex ml-3 flex-col">
        <div class="h-4 w-40 bg-gray-400 my-3 animate-pulse"></div>
        <div class="h-4 w-20 bg-gray-400"></div>
        <div class="h-4 my-3 w-40 bg-gray-400 animate-pulse"></div>
      </div>
    </div>
  );
}

export default function SuggestLoading() {
  const arr = [1, 2, 3, 4];
  return (
    <div class="sticky top-20">
      {arr.map((r) => (
        <Loading key={r} />
      ))}
    </div>
  );
}
