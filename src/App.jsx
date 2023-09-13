import "./App.css";

function App() {
  return (
    <main class="p-3">
      <h1 class="text-center text-lg text-red-500">Hello Good Morning </h1>

      <ul class="flex flex-col lg:flex-row gap-4 justify-between items-center">
        <ul class="flex gap-6 bg-violet-300 border-violet-600 rounded-md my-4 p-2">
          <li class="font-mono font-bold"> MEN</li>
          <li class="font-mono font-bold"> WOMEN</li>
          <li class="font-mono font-bold"> KIDS</li>
          <li class="font-mono font-bold"> HOME&LIVING</li>
          <li class="font-mono font-bold"> BEAUTY</li>
          <input
            class="placeholder-gray-400 text-gray-700 bg-white rounded shadow focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            placeholder="Enter your search query...."
          />
          <ul class="flex gap-6">
            <li class="font-mono font-bold"> PROFILE</li>
            <li class="font-mono font-bold"> WISHLIST</li>
            <li class="font-mono font-bold"> BAG</li>
          </ul>
        </ul>
      </ul>

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
      <div>
        <label for="search" class="block text-gray-700 font-bold mb-2">
          Search
        </label>
        <input
          id="search"
          name="search"
          type="text"
          class="w-sm px-3 py-2 placeholder-gray-400 text-gray-700 bg-white rounded shadow focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
          placeholder="Enter your search query...."
        />
      </div>
      <div class="max-w-md mx-auto">
        <form class="mt-8 space-y-6">
          <div>
            <label for="name" class="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              class="w-full px-3 py-2 placeholder-gray-400 text-gray-700
               bg-white rounded shadow focus:outline-none focus:shadow-outline-blue
                focus:border-blue-300"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label for="email" class="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              class="w-full px-3 py-2 placeholder-gray-400 text-gray-700
               bg-white rounded shadow focus:outline-none 
               focus:shadow-outline-blue focus:border-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <button
            type="submit"
            class=" px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md focus:outline-none focus:shadow-outline-blue"
          >
            Submit
          </button>
        </form>
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
        <div >
          <div class="bg-zinc-400 rounded-lg shadow-lg h-10 w-40 flex grid-cols-2 gap-3"></div>
          <div class="my-4 bg-zinc-400 rounded-lg shadow-lg h-10 w-40 flex grid-cols-2 gap-3"></div>
        </div>
      </div>
    </main>
  );
}

export default App;
