<script setup>
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/vue/24/solid'
const cards = [
    {
        imageSrc: '/images/Card/Card5.png',
        tag: 'Blog',
        title: 'Reducing Manual Work in Asset Finance: Where to…',
        excerpt: 'Understand the real operational cost of outdated systems—and how to...',

    },
    {
        imageSrc: '/images/Card/Card1.png',
        tag: 'Webinar',
        title: 'Decoding AI Trends | Transcend AI Labs Podcast',
        excerpt: 'Join us for the Transcend AI Labs Podcast as we dive into the latest...',
        isMedia: true
    },
    {
        imageSrc: '/images/Card/Card2.png',
        tag: 'Whitepaper',
        title: 'The AI Transformation Playbook for Auto',
        excerpt: 'Explore key strategies for OEM finance arms to adopt AI across the...',

    },
    {
        imageSrc: '/images/Card/Card3.png',
        tag: 'Blog',
        title: 'How the Right Digital Retail Stack Can Future-',
        excerpt: 'The auto industry is facing a multitude of challenges and...',

    }
]
</script>
<template>

    <section class="py-10">
        <div class="max-w-7xl ml-16 mr-16 px-8 ">
            <h2 class="text-2xl md:text-4xl  font-qualy text-gray-800 leading-snug ff-elephent">
                Featured
                <span class=" font-qualy text-blue-500">Reads & Insights</span>
            </h2>

            <div class="flex">
                <div class="text-gray-600 text-[17px] max-w-xl mt-[25px] mb-[40px]">
                    Stay informed with the latest from NETSOL—thought leadership, product updates, industry
                    perspectives, and company news, all in one place.
                </div>

                <div class="flex items-center gap-3 ml-[550px]">
                    <!-- Left arrow button -->
                    <button
                        class="w-10 h-10 flex items-center justify-center rounded-full border border-opacity-10 shadow-xl bg-white-200 text-white-700 hover:bg-slate-100 transition">
                        <ArrowLeftIcon class="w-5 h-5" />
                    </button>

                    <!-- Right arrow button -->
                    <button
                        class="w-10 h-10 flex items-center justify-center rounded-full border border-opacity-10 shadow-xl bg-white-200 text-white-700 hover:bg-slate-100 transition">
                        <ArrowRightIcon class="w-5 h-5" />
                    </button>
                </div>

            </div>


            <!-- Grid for 4 cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <article v-for="(c, i) in cards" :key="i"
                    class="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col h-full">
                    <!-- Image -->
                    <div class="relative w-full h-50 md:h-49 lg:h-50 overflow-hidden">
                        <img :src="c.imageSrc" alt="" class="object-cover w-full h-full" />
                    </div>

                    <!-- Content -->
                    <div class="p-4 md:p-5 flex-1 flex flex-col">
                        <!-- Tag -->
                        <div v-if="c.tag" class="text-xs font-medium font-poppins-semibold text-sky-600  tracking-wide mb-2">
                            {{ c.tag }}
                        </div>

                        <!-- Title -->
                        <h3 class="text-base md:text-lg font-bold font-poppins-semibold text-slate-900 leading-tight mb-2">
                            {{ c.title }}
                        </h3>

                        <!-- Excerpt -->
                        <p class="text-sm text-slate-600 mb-4 line-clamp-3">
                            {{ c.excerpt }}
                        </p>

                        <!-- Footer / Link -->
                        <div class="mt-auto">
                            <NuxtLink
                                class="inline-flex items-center gap-2 text-sm font-medium text-slate-800 hover:text-slate-900">
                                Read Now
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </NuxtLink>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>
</template>
