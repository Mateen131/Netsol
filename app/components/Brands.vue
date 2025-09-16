<template>
  <div
    class="clients-logos bannerClients lg:bg-repeat bg-no-repeat lg:bg-contain bg-cover bg-center py-9 md:py-16"
    style="background-image:url(/images/brands/bgimage.jpeg);"
  >
    <h3
      class="text-3xl md:text-xl-md font-poppins-semibold font-bold text-center mb-8 text-gray-800 text-contentGrey"
    >
      The World's Leading Brands are Powered by NETSOL
    </h3>

    <div class="w-full overflow-hidden whitespace-nowrap ">
      <div class="flex flex-nowrap">
        <!-- Logos -->
     <div
  v-for="(logo, index) in logos"
  :key="index"
  class="client_logo_container flex-shrink-0 mx-6 w-32 md:w-36 h-20 md:h-24 flex items-center justify-center bg-white border border-gray-200 rounded-5 shadow-sm p-2"
>
  <NuxtImg
    :src="`/images/Techimages/${logo}`"
    :alt="`Logo ${index}`"
    class="w-28 h-16 md:w-32 md:h-20 object-contain"
  />
</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const logos = [
  'autonation.png',
  'bmw.png',
  'byd.png',
  'chase.png',
  // 'greatwall.png',   <-- ❌ removed as requested
  'peterbilt.png',
  'volvo.png',
  'yamaha.png'
]
</script>
