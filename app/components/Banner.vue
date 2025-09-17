<template>
  <section class="w-full bg-white border-b">
    <div class="max-w-7xl mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 md:py-16">

        <div class="space-y-4">
          <p class="text-sm tracking-wider text-gray-500 uppercase">Connect Sales</p>

          <h1 class="text-3xl md:text-4xl font-extrabold leading-tight">
            Explore <span class="text-blue-600">NETSOL</span><span class="block md:inline"> Technologies</span>
          </h1>

          <p class="text-gray-600 max-w-lg">
            With strategically located centers worldwide, we futureproof operations for financial institutions
            globally.
          </p>

          <NuxtLink to="/contact"
            class="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition duration-300">
            Get in Touch
          </NuxtLink>
        </div>

        <div class="flex justify-center md:justify-end mr-20">

          <NuxtImg src="/images/Banner/broker.png" alt="NETSOL" />
        </div>

      </div>
    </div>
  </section>

</template>
