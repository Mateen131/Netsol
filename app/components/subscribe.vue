<template>
  <section class="relative w-full h-auto overflow-hidden">
    <div class="relative flex items-center h-[600px]">
      
      <!-- LEFT SIDE -->
      <div class="relative w-[60%] flex items-center justify-end h-full">
        <img
          src="/Images/subscribe/Patterns.webp"
          alt="Pattern"
          class="absolute inset-0 w-full h-full object-cover "
        />
        <img
          src="/Images/subscribe/Car.webp"
          alt="Car"
          class="relative z-10 w-[400px] md:w-[500px] lg:w-[560px] object-contain transform translate-x-1/4"
        />
      </div>

      <!-- RIGHT SIDE -->
      <div class="relative w-[80%] flex items-center h-full">
        <img
          src="/Images/subscribe/NewsletterGradient.webp"
          alt="Newsletter Gradient"
          class="absolute inset-0 w-full h-full object-cover z-0"
        />

<div  class="absolute w-full h-[27%] top-[270px] left-0 -translate-y-10 md:bg-[linear-gradient(270deg,#B5F4F0_5.01%,rgba(181,244,240,0.10)_82.62%)]"></div>

    <div class="relative z-20 w-full flex flex-col items-center justify-center ">
    <div class="mt-10">
  <h2 class="text-4xl  text-white leading-snug px-8">
    Subscribe to our newsletter  to get
    <br>
  
    the latest news in your inbox.
  </h2>
</div>
<div class="mb-56 pt-28">
<form
            class="flex bg-white shadow-md overflow-hidden w-[520px] rounded-xl  h-14"
          >
            <input
              type="email"
              placeholder="abc@example.com"
              class="flex-grow px-4 py-3 text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              class="bg-blue-600 text-white px-6 py-3 w-60 font-medium text-lg hover:bg-blue-700 transition-colors"
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
