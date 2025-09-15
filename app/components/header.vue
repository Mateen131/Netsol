<script setup>
import { ref } from "vue"
import logo from '~/assets/images/logo.png'
import usaFlag from '~/assets/images/usa-flag.png'



// Dropdown state
const openMenu = ref(null)
const toggleMenu = (menu) => {
  openMenu.value = openMenu.value === menu ? null : menu
}
</script>

  <template class="bg-gray-100 min-h-screen flex flex-col">
    <!-- ===== Header ===== -->
    <header class=" fixed top-0 left-0 w-full bg-white z-50">
      <div class="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        <!-- Logo -->
        <div class="flex items-center space-x-2">
          <img :src="logo" alt="NETSOL Logo" class="h-8" />
          <span class="font-bold text-xl text-gray-800">NETSOL</span>
        </div>

        <!-- Navigation -->
        <nav class="hidden md:flex space-x-6 text-gray-700 font-medium relative">
          <!-- Platform -->
          <div class="relative">
            <button @click="toggleMenu('platform')" class="hover:text-blue-600 flex items-center">
              Platform ▾
            </button>
            <div
              v-if="openMenu === 'platform'"
              class="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2 z-50"
            >
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Transcend platform</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Digital Retail</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Intermediary portals</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Originations</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Servicing</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Wholesale Finance</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Mobility Solutions</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">AI Labs</NuxtLink>
            </div>
          </div>

          <!-- Marketplace -->
          <NuxtLink to="#" class="hover:text-blue-600">Marketplace</NuxtLink>

          <!-- Consultancy -->
          <div class="relative">
            <button @click="toggleMenu('consultancy')" class="hover:text-blue-600 flex items-center">
              Consultancy ▾
            </button>
            <div
              v-if="openMenu === 'consultancy'"
              class="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2 z-50"
            >
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Information Security</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Digital Solutions </NuxtLink>
               <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">AI,ML & Data Analytics</NuxtLink>
                <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Generative AI</NuxtLink>
                 <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Policy & Stategy</NuxtLink>
                  <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Emerging Technologies</NuxtLink>
                   <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Cloud Services</NuxtLink>
                    <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Data Engineering</NuxtLink>
            </div>
          </div>

          <!-- Solutions -->
          <div class="relative">
            <button @click="toggleMenu('solutions')" class="hover:text-blue-600 flex items-center">
              Solutions ▾
            </button>
            <div
              v-if="openMenu === 'solutions'"
              class="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2 z-50"
            >
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Automotive Finance</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Equipment Finance</NuxtLink>
            </div>
          </div>


          <!-- About + Contact -->
            <NuxtLink to="#" class="hover:text-blue-600">Insights</NuxtLink>
            <!-- About -->
          <div class="relative">
            <button @click="toggleMenu('About Us')" class="hover:text-blue-600 flex items-center">
              About Us ▾
            </button>
            <div
              v-if="openMenu === 'About Us'"
              class="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2 z-50"
            >
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Why NETSOL</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Board of Directors</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Management Team</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">News</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Investors</NuxtLink>
              <NuxtLink to="#" class="block px-4 py-2 hover:bg-gray-100">Careers</NuxtLink>
            </div>
          </div>
         
          <NuxtLink to="#" class="hover:text-blue-600">Contact Us</NuxtLink>
        </nav>

        <!-- Language Selector -->
        <div>
          <img :src="usaFlag" alt="USA Flag" class="h-6 w-6 rounded-full border border-gray-400" />
        </div>
      </div>
    </header>
</template>