<script setup>
import { ref } from 'vue'
import { ChevronDownIcon } from '@heroicons/vue/24/solid'

const openDropdown = ref(null)
const mobileMenuOpen = ref(false)

function toggleDropdown(name) {
  openDropdown.value = openDropdown.value === name ? null : name
}

function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header class="fixed top-0 left-0 w-full h-[65px] bg-white z-50 shadow-sm">
    <div class="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
      
      <!-- Left: Logo -->
      <div class="flex items-center space-x-2">
        <NuxtImg src="/images/Header/h-logo.png" alt="Logo" width="60" height="50" />
        <span class="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-gray-700">NETSOL</span>
      </div>

      <!-- Center: Nav (hidden on mobile, shown from md up) -->
      <nav class="hidden md:flex items-center space-x-6 lg:space-x-8 text-gray-600 text-[13px] sm:text-[14px]">
        <button @click="toggleDropdown('platform')" class="flex items-center">
          Platform
          <ChevronDownIcon class="w-4 h-4 ml-1 transition-transform" :class="{ 'rotate-180': openDropdown === 'platform' }" />
        </button>

        <button>Marketplace</button>

        <button @click="toggleDropdown('consultancy')" class="flex items-center">
          Consultancy
          <ChevronDownIcon class="w-4 h-4 ml-1 transition-transform" :class="{ 'rotate-180': openDropdown === 'consultancy' }" />
        </button>

        <button @click="toggleDropdown('solutions')" class="flex items-center">
          Solutions
          <ChevronDownIcon class="w-4 h-4 ml-1 transition-transform" :class="{ 'rotate-180': openDropdown === 'solutions' }" />
        </button>

        <button>Insights</button>

        <button @click="toggleDropdown('about')" class="flex items-center">
          About Us
          <ChevronDownIcon class="w-4 h-4 ml-1 transition-transform" :class="{ 'rotate-180': openDropdown === 'about' }" />
        </button>

        <button>Contact Us</button>
      </nav>

      <!-- Right: Flag + Mobile Menu Icon -->
      <div class="flex items-center space-x-6">
        <!-- Flag -->
        <NuxtImg src="/images/Header/usa-flag.png" alt="Flag" 
          class="w-8 h-8 sm:w-9 sm:h-9 rounded-full border object-cover border-gray-400" />

        <!-- Hamburger Menu (visible on mobile only) -->
        <button @click="toggleMobileMenu" class="md:hidden p-2 border rounded">
          <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu (only visible when hamburger clicked) -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white shadow-md">
      <nav class="flex flex-col space-y-2 px-6 py-4 text-gray-600">
        <button>Platform</button>
        <button>Marketplace</button>
        <button>Consultancy</button>
        <button>Solutions</button>
        <button>Insights</button>
        <button>About Us</button>
        <button>Contact Us</button>
      </nav>
    </div>
  </header>
</template>
