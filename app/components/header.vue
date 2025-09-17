<script setup>

import { ref } from 'vue'
import { ChevronDownIcon } from "@heroicons/vue/24/solid"

const openDropdown = ref(null)

function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name
}
</script>

<template>
    <header class=" fixed top-0 left-0 w-full h-[65px] bg-white z-50">
      <div class="flex py-1 ml-20">
        <div class="flex">
           <NuxtImg src="/images/Header/h-logo.png" alt="Logo" width="70" height="60"></NuxtImg>
          <span class="text-[25px] pt-[10px] font-bold text-gray-600">NETSOL</span>
        </div>

        <div class=" w-[70%] ml-32 pt-[6px] flex items-center ">

          <nav class="w-[100%] mb-2 flex items-center space-x-7 ">

            <div>
              <button @click="toggleDropdown('platform')" class="flex text-[14px] text-gray-600">Platform
                <ChevronDownIcon class="w-5 h-5 ml-1 pt-[5px] transition-transform"
                  :class="{ 'rotate-180': openDropdown === 'Platform' }" />
              </button>
              <div v-if="openDropdown === 'platform'"
                class="absolute bg-white text-black rounded shadow-lg mt-2 w-40 z-10">
                <div class="text-xs">
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Transcend Platform</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Digital Retail</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Intermediary Portals</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Originations</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Servicing</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Wholesale Finance</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Mobility Solutions</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">AI Labs</a>
                </div>

              </div>
            </div>

            <div>
              <button class="flex text-[14px] text-gray-600">MarketPlace
              </button>
            </div>


            <div>
              <button @click="toggleDropdown('Consultancy')" class="flex text-[14px] text-gray-600">Consultancy
                <ChevronDownIcon class="w-4 h-4 ml-1 pt-[5px] transition-transform"
                  :class="{ 'rotate-180': openDropdown === 'Consultancy' }" />
              </button>
              <div v-if="openDropdown === 'Consultancy'"
                class="absolute bg-white text-black rounded shadow-lg mt-2 w-40 z-10">

                <div class="text-xs">
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Information Security</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Digital Solutions</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">AI, ML & Data Analytics</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Generative AI</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Policy & Strategy</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Emerging Technologies</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Cloud Services</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Data Engineering</a>
                </div>
              </div>
            </div>

            <div>
              <button @click="toggleDropdown('Solutions')" class="flex text-[14px] text-gray-600">Solutions
                <ChevronDownIcon class="w-4 h-4 ml-1 pt-[5px] transition-transform"
                  :class="{ 'rotate-180': openDropdown === 'Solutions' }" />
              </button>
              <div v-if="openDropdown === 'Solutions'"
                class="absolute bg-white text-black rounded shadow-lg mt-2 w-40 z-10">
                <div class="text-xs">
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Automotive Finance</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Equipment Finance</a>
                </div>
              </div>
            </div>

            <div>
              <button class="flex text-[14px] text-gray-600">Insights
              </button>
            </div>


            <div>
              <button @click="toggleDropdown('About Us')" class="flex text-[14px] text-gray-600">About Us
                <ChevronDownIcon class="w-4 h-4 ml-1 pt-[5px] transition-transform"
                  :class="{ 'rotate-180': openDropdown === 'About Us' }" />
              </button>
              <div v-if="openDropdown === 'About Us'"
                class="absolute bg-white text-black rounded shadow-lg mt-2 w-40 z-10">
                <div class="text-xs">
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Why Netsole</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Board Of Directors</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Management Team</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">News</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Investors</a>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100">Careers</a>
                </div>
              </div>
            </div>

            <div>
              <button class="flex text-[14px] text-gray-600">Contact Us
              </button>
            </div>

            <div class="flex items-center w-[148px]">
                    <NuxtImg src="/images/Header/usa-flag.png" alt="Flag"
                class="w-9 h-9 rounded-full border-2 object-scale-down border-gray-400 ml-auto" />
              
            </div>


          </nav>

        </div>

      </div>
    </header>

</template>
