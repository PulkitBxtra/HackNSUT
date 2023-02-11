import React from 'react'

function Navbar() {
  return (
    <div>
        <header class="text-gray-600 body-font">
  <div class="  container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="/">
     
    <img
              class="w-auto h-16 mt-2"
              src="https://i.imgur.com/FZCkcN0.png"
              alt="asme logo"
            />
      
    </a>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900 cursor-pointer" href='/'>Home</a>
      <a class="mr-5 hover:text-gray-900 cursor-pointer" href="/about" >About us</a>
      <a class="mr-5 hover:text-gray-900 cursor-pointer">Third Link</a>
      <a class="mr-5 hover:text-gray-900 cursor-pointer">Experiences</a>
    </nav>
    <button class=" text-gray-700 inline-flex items-center bg-green-400 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base mt-4 md:mt-0">Login
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>

    </div>
  )
}

export default Navbar