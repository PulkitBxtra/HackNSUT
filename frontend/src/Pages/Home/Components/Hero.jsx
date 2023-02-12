import React from 'react'
import '../Home.css'

function Hero() {
  return (
    <div>
        
        <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What is the our
        <br class="hidden lg:inline-block"/>Mission?
      </h1>
      <p class="mb-8 leading-relaxed">We are the ultimate platform for managing and tracking your personal health information. With Health Ledger, you can store, organize and access all of your health data in one secure and easy-to-use platform.</p>
      <div class="flex justify-center">
        <button class="inline-flex text-white bg-emerald-500 border-0 py-2 px-6 focus:outline-none hover:bg-emerald-600 rounded text-lg">
        <a href="/dashboard/user"> Join Now </a></button>
        <button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"><a href="/experiences"> Experiences </a></button>
      </div>
    </div>
    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      {/* <img class="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
      {/* <img class="object-cover object-center rounded" alt="hero" src="https://i.imgur.com/nuK8n0B.png"/> */}
      {/* <img class="object-cover object-center rounded" alt="hero" src="https://i.imgur.com/sneWcdy.png"/> */}
      {/* <img class="object-cover object-center rounded" alt="hero" src="https://i.imgur.com/ciMxrcr.png"/> */}
      <img class="object-cover object-center rounded" alt="hero" src="https://i.imgur.com/7s3UBwt.png"/>
    </div>
  </div>
</section>

<section
          id="keyFeatures"
          class="bg-image-parallax flex flex-col w-full h-[500px] bg-cover bg-fixed bg-center flex justify-center items-center"
        >
          <div class="text-gray-200 body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="flex flex-wrap -m-4 text-center">
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-5xl text-3xl text-white mb-1">
                    2023
                  </h2>
                  <p class="leading-relaxed">Year Established</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-5xl text-3xl text-white mb-1">
                    50+
                  </h2>
                  <p class="leading-relaxed">Transactions per second</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-5xl text-3xl text-white mb-1">
                    4
                  </h2>
                  <p class="leading-relaxed">Our Members</p>
                </div>
                <div class="p-4 sm:w-1/4 w-1/2">
                  <h2 class="title-font font-medium sm:text-5xl text-3xl text-white mb-1">
                    9000+
                  </h2>
                  <p class="leading-relaxed">Lines of code</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-lg">"Health is truly the greatest treasure a person can possess. And at Health Ledger, we believe that everyone deserves to be the best version of themselves, to laugh with joy and live life to the fullest. That's why we strive every day to bring the best of healthcare directly to you, in a warm, welcoming and professional environment. At Health Ledger, we believe that health is not just about the absence of illness, but a state of complete physical, mental, and emotional well-being. We understand that life is precious and it's our mission to help you make the most of every moment. With a team of dedicated and caring healthcare professionals, we are here to support you every step of the way."</p>
      <span class="inline-block h-1 w-10 rounded bg-emerald-500 mt-8 mb-6"></span>
      <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">VINAY AGARWAL</h2>
      <p class="text-gray-500">Lead Developer</p>
    </div>
  </div>
</section>

        

    </div>
  )
}

export default Hero