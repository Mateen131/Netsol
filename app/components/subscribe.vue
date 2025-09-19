<template>
  <section class="relative w-full h-auto overflow-hidden ">
    <div class="relative flex flex-col lg:flex-row items-center h-auto lg:h-[600px] ">
      
      <!-- LEFT SIDE -->
      <div class="relative w-full lg:w-[60%] flex items-center justify-center lg:justify-end h-[280px] sm:h-[320px] md:h-[400px] lg:h-full">
        <img
          src="/Images/subscribe/Patterns.webp"
          alt="Pattern"
          class="absolute inset-0 w-full h-full object-cover"
        />
        <img
          src="/Images/subscribe/Car.webp"
          alt="Car"
          class="relative z-10 
                 w-[220px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[560px] 
                 object-contain lg:translate-x-1/4 lg:translate-y-4 "
        />
      </div>

      <!-- RIGHT SIDE -->
      <div class="relative w-full lg:w-[80%] flex items-center justify-center h-full py-10 lg:py-0">
        <img
          src="/Images/subscribe/NewsletterGradient.webp"
          alt="Newsletter Gradient"
          class="absolute inset-0 w-full h-full object-cover z-0"
        />

        <!-- Gradient strip (only from md and up) -->
        <div class="absolute hidden md:block w-full h-[20%] md:h-[27%] top-[40%] md:top-[270px] left-0 
                    -translate-y-10 md:bg-[linear-gradient(270deg,#B5F4F0_5.01%,rgba(181,244,240,0.10)_82.62%)]">
        </div>

        <div class="relative z-20 w-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12">
          
          <!-- Heading -->
          <div class="mb-6">
            <h2 class="text-2xl sm:text-3 xl md:text-4xl lg:text-3xl text-white leading-snug lg:-mt-44 lg:text-left xl:text-4xl text-left 2xl:text-5xl ">
              Subscribe to our newsletter to get
              <br class="hidden sm:block" />
              the latest news in your inbox.
            </h2>
          </div>

          <!-- Form -->
          <div class="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-sm xl:max-w-lg xl:ml-5 2xl:w-xl ">
            <form class="flex flex-col sm:flex-row bg-white shadow-md overflow-hidden rounded-2xl h-auto sm:h-14">
              <input
                type="email"
                placeholder="abc@example.com"
                class="flex-grow px-4 py-3 text-gray-400 focus:outline-none text-sm sm:text-base"
              />
              <button
                type="submit"
                class="bg-blue-600 text-white px-6 py-3 sm:py-0 sm:w-40 lg:w-60 font-medium text-sm sm:text-base hover:bg-blue-700 transition-colors font-sans"
              >
                Subscribe
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  </section>
</template>
