<script setup>
import cardImage from '~/assets/netsol.png'
</script>

<template>
  <section class="w-full flex justify-center items-center py-12 px-6">
    <!-- Use explicit grid-template-columns on md to control space ratio -->
    <div class="max-w-5xl w-full bg-white rounded-2xl shadow-lg overflow-hidden
                grid grid-cols-1 md:[grid-template-columns:1.6fr_1fr]">
      <!-- LEFT: Text -->
      <div class="flex flex-col justify-center p-8 space-y-4">
        <p class="text-sm tracking-wider text-gray-500 uppercase">Connect Sales</p>

        <h1 class="text-3xl md:text-4xl font-extrabold leading-tight">
          Explore <span class="text-blue-600">NETSOL</span>
          <span class="block md:inline"> Technologies</span>
        </h1>

        <p class="text-gray-600 max-w-md">
          With strategically located centers worldwide, we futureproof operations for financial institutions globally.
        </p>

        <NuxtLink
          to="/contact"
          class="inline-block mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Get in Touch
        </NuxtLink>
      </div>

      <!-- RIGHT: Image -->
      <div class="flex items-center justify-center bg-gray-50 p-6 md:p-8">
        <!-- Fixed max width on md ensures image can't explode -->
        <img
          :src="cardImage"
          alt="NETSOL"
          class="w-full max-w-[320px] md:max-w-[420px] md:w-[420px] object-contain"
          loading="lazy"
        />
      </div>
    </div>
  </section>
</template>
