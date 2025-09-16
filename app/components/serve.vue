<script setup>
defineProps({
  title: {
    type: String,
    default: "Who We Serve"
  },
  subtitle: {
    type: String,
    default: "Orchestrating commerce, intelligence, and innovation across asset finance, retail, and advisory ecosystems."
  },
  items: {
    type: Array,
    default: () => [
      {
        icon: "👥", // Replace with proper SVG/Icon later
        heading: "OEMs & Dealers",
        text: "We support OEMs and dealers with a future-ready mobility platform. From digital retail to connected journeys, financing, servicing, and EVs, every channel unified, every touchpoint optimized."
      },
      {
        icon: "🚗",
        heading: "Captives & Lenders",
        text: "For captives and lenders, our secure cloud platform streamlines retail and wholesale finance. Originations, servicing, and analytics built to support electric, connected, and autonomous vehicles."
      },
      {
        icon: "🔗",
        heading: "Brokers & Aggregators",
        text: "Empower brokers and aggregators with tools to manage multiple lender workflows, automate documentation, and accelerate decisions while ensuring audit readiness and operational efficiency."
      }
    ]
  }
})
</script>

<template>
  <section class="bg-white py-16">
    <div class="max-w-7xl mx-auto text-center px-6 ">
      <!-- Title -->
      <h2 class="text-3xl md:text-4xl  text-gray-800 font-qualy">
        {{ title.split(" ")[0] }}
        <span class="text-blue-600">{{ title.split(" ").slice(1).join(" ") }}</span>
      </h2>
      <p class="mt-4 text-gray-600 max-w-2xl mx-auto ">
        {{ subtitle }}
      </p>

      <!-- Cards -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-3 ">
        <div v-for="(item, index) in items" :key="index" class="p-6 bg-white  rounded-lg border border-gray-100 border-y-[1px] transition divide-opacity-100">
          <div class="text-4xl text-blue-600 mb-4">
            {{ item.icon }}
          </div>
          <h3 class="text-lg font-semibold text-gray-800">{{ item.heading }}</h3>
          <p class="mt-3 text-gray-600 text-sm leading-relaxed">
            {{ item.text }}
          </p>
        </div>
      </div>

      <!-- CTA Button -->
      <div class="mt-10">
        <a
          href="#"
          class="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
        >
          Connect with us
          
          <svg xmlns="http://www.w3.org/2000/svg"
           class="w-4 h-8 text-white"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor"
           stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M17 7H7m10 0v10M17 7L7 17"/>
      </svg>
        </a>
      </div>
    </div>
  </section>
</template>
