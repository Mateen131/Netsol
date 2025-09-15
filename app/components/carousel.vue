<template>
    <section class="relative py-16 sm:px-6 lg:py-24 lg:px-8 mt-0 bg-cover bg-center bg-no-repeat overflow-hidden h-auto"
        style="background-image: url('/bg.png'); ">
        <div class="absolute inset-0 z-0 w-full">
            <div class="h-full w-full opacity-30 absolute inset-0"></div>
            <div class="h-full w-full opacity-5">
                <svg class="h-full w-full" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="grid-pattern" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                        <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#6b7280" stroke-width="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                </svg>
            </div>
        </div>

        <!-- 👇 overflow-hidden wrapper -->
        <div class="relative z-10 overflow-hidden lg-px-10">
            <div class="flex transition-transform duration-500 ease-in-out"
                :style="{ transform: `translateX(-${activeIndex * 100}%)` }">
                <div v-for="(testimonial, index) in testimonials" :key="index"
                    class="flex-shrink-0 w-full min-w-full max-w-7xl mx-auto lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center px-6 lg:px-8">
                    <div class="text-left space-y-6 ml-8 ">
                        <h2 class="text-gray-800 text-4xl font-qualy ">
                            {{ testimonial.heading }}
                        </h2>
                        <blockquote class="mt-6 text-xl font-small text-gray-700">
                            "{{ testimonial.quote }}"
                        </blockquote>
                        <div class="mt-4 space-y-2">
                            <p class="text-4xl  text-gray-700 font-qualy">
                                {{ testimonial.author }}
                            </p>
                            <p class="text-lg text-gray-600">
                                {{ testimonial.title }}
                            </p>
                        </div>
                    </div>
                    <div class="mt-12 lg:mt-0 flex justify-center lg:justify-end mr-16 relative">
                        <!-- 👇 Image -->
                        <img :src="testimonial.image" :alt="testimonial.author"
                            class="w-96 max-w-md h-auto rounded-2xl shadow-xl mr-20" />

                        <!-- 👇 Show button only on last slide -->
                        <a v-if="index === testimonials.length - 1" href="https://youtu.be/UxYxR0L8ypA" target="_blank"
                            class="absolute bottom-6 left-6 group">
                            <div class=" w-16 h-16 bg-white rounded-full absolute bottom-2 left-40 p-4
             shadow-lg transition-all duration-300 group-hover:scale-110">
                                <svg class="h-8 w-8 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </a>

                    </div>

                </div>
            </div>
        </div>


    </section>
    <!-- dots -->
    <div class="flex justify-center mt-10 space-x-3 ">
        <button v-for="(testimonial, index) in testimonials" :key="index" @click="goToSlide(index)"
            class="w-10 h-2 rounded-full transition-all duration-300"
            :class="{ 'bg-blue-500': activeIndex === index, 'bg-gray-300': activeIndex !== index }"></button>
    </div>

</template>

<script setup>
    import { ref } from 'vue';

    const activeIndex = ref(0);

    const testimonials = [
        {
            heading: "Another Success Story with NETSOL",
            quote: "At MINI, we decided it was time to create an end-to-end purchasing and finance journey for the consumer and it was important to create something more than a lead generator to facilitate the complete transaction for any MINI customer, any place, any time. Our partnership with NETSOL has enabled us not only to catch up with industry leaders, but also to set new benchmarks in digital auto-retail, which the usual suspects in the industry could not provide.",
            author: "Mike Peyton",
            title: "Chief Motorer and Vice-President of MINI of the Americas",
            image: "/pic.png",
        },
        {

            quote: "We are pleased to be working with NETSOL as our strategic platform partner. NETSOL’s smart technology solutions are well-recognized in the finance and leasing space and deploying Transcend Finance (Formerly known as Ascent) enables us to maintain a competitive edge in today’s highly dynamic marketplace. With its powerful configuration engines, Ascent will streamline our processes, enabling faster on-boarding of new partners and speed up new product introductions across markets.",
            author: "Henrik Staulund",
            title: "Chief Commercial Officer at Ikano Bank",
            image: "/henrik.png",
        },
        {
            heading: "Haydock Financial Finds Success with NETSOL's Marketplace",
            quote: "I'd absolutely recommend both Appex Now and NETSOL. The products are brilliant. It works fantastically well. And, NETSOL has been responsive to our needs. Quickly made any changes that we required.",
            author: "Mike Boyes",
            title: "Head of Vendor, Haydock Finance",
            image: "/mike_boyes.webp",
        },

    ];

    const goToSlide = (index) => {
        activeIndex.value = index;
    };
</script>