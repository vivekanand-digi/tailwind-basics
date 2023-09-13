import "./App.css";

function App() {
  return (
    <main class="p-3">
      <h1 class="text-center text-lg text-red-500">Hello Good Morning </h1>

      <div class="w-full h-10 bg-violet-300 border-violet-600 rounded-md my-4 p-2">
        <p class="text-center font-mono font-bold"> Header</p>
      </div>
      <div class="flex justify-between">
        <div class="h-16 w-16 rounded-full bg-blue-500 font-bold p-5">A</div>
        <div class="h-16 w-16 rounded-full bg-blue-500 font-bold p-5">B</div>
        <div class="h-16 w-16 rounded-full bg-blue-500 font-bold p-5">C</div>
      </div>

      <div class="grid grid-cols-3 mt-3 gap-2">
        <div class="bg-violet-500 h-12  rounded-md font-bold text-center p-2">
          DIV 1
        </div>
        <div class="bg-violet-500 h-12 rounded-md font-bold text-center p-2">
          DIV 2
        </div>
        <div class="bg-violet-500 h-12 rounded-md font-bold text-center p-2">
          DIV 3
        </div>
      </div>

      <div class="px-2 py-2 space-x-6">
        <button class="my-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-700  focus:outline-none focus:ring focus:ring-blue-300 active:bg-blue-800">
          Click Me
        </button>
        <button class="rounded-lg bg-green-300 px-4 py-2 font-bold">+</button>
        <button class="rounded-lg bg-green-300 px-4 py-2 font-bold">-</button>
      </div>

      <ul class="my-2 space-y-2">
        <li class="bg-white p-2 first:bg-yellow-100">Item 1</li>
        <li class="bg-white p-2 first:bg-yellow-100 odd:bg-200 even:bg-green-200">
          Item 2
        </li>
        <li class="bg-white p-2 first:bg-yellow-100 even:bg-green-200 odd:bg-gray-500">
          Item 3
        </li>
        <li class="bg-white p-2 first:bg-yellow-100 odd:bg-200 even:bg-orange-400">
          Item 4
        </li>
        <li class="bg-white p-2 first:bg-yellow-100 even:bg-green-200 odd:bg-pink-400">
          Item 5
        </li>
      </ul>

      <div class="m-10 rounded-lg bg-gray-500 px-6 py-8 shadow-xl ring-1 ring-slate-900/5 dark:bg-blue-950">
        <h3 class="text-base font-medium tracking-tight text-slate-900 dark:text-white">
          This is a text element
        </h3>

        <button
          class="mt-4 rounded-md bg-blue-100 px-2 py-2 text-blue-900"
          onclick="document.body.classList.toggle('dark')"
        >
          Toggle dark mode
        </button>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-5">
        <div>
          <div class="flex grid-cols-2 gap-3">
            <div class="bg-zinc-400 rounded-lg shadow-lg h-56 w-60"></div>
          </div>
          <div class="text-center">
            <span class="font-semibold">Item 1</span>
          </div>
        </div>

        <div>
          <div class="flex grid-cols-2 gap-3">
            <div class="bg-zinc-400 rounded-lg shadow-lg h-56 w-60"></div>
          </div>
          <div class="text-center">
            <span class="font-semibold">Item 2</span>
          </div>
        </div>
        <div>
          <div class="flex grid-cols-2 gap-3">
            <div class="bg-zinc-400 rounded-lg shadow-lg h-56 w-60"></div>
          </div>
          <div class="text-center">
            <span class="font-semibold">Item 3</span>
          </div>
        </div>
        <div>
          <div class="flex grid-cols-2 gap-3">
            <div class="bg-zinc-400 rounded-lg shadow-lg h-56 w-60"></div>
          </div>
          <div class="text-center">
            <span class="font-semibold">Item 4</span>
          </div>
        </div>
        <div>
          <div class="flex grid-cols-2 gap-3">
            <div class="bg-zinc-400 rounded-lg shadow-lg h-56 w-60"></div>
          </div>
          <div class="text-center">
            <span class="font-semibold">Item 5 </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
