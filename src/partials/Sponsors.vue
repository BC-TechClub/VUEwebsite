<template>
  <section class="bg-gray-900">

    <div class="py-12 md:py-12">

      <!-- Section header -->
      <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h2 class="h4 font-cabinet-grotesk text-gray-100">OUR Clubs</h2>
      </div>

      <!-- Carousel built with Swiper.js [https://swiperjs.com/] -->
      <!-- * Custom styles in src/css/additional-styles/theme.scss -->
      <div class="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-gray-900 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-gray-900">
        <div class="swiper-wrapper !ease-linear select-none">
          <!-- Carousel items -->
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" :src="club_logo1" alt="Client 01" />
          </div>
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" :src="club_logo2" alt="Client 02" />
          </div>
          <div class="swiper-slide !h-32 !w-32 bg-gray-800 rounded-2xl flex items-center justify-center group">
            <img class="opacity-40 group-hover:opacity-100 transform duration-500 ease-in-out" :src="club_logo3" alt="Client 03" />
          </div>
        </div>
      </div>

    </div>

  </section>
</template>

<script>
import { onMounted } from 'vue'
import club_logo1 from "../assets/club logos/TSC.png"
import club_logo2 from "../assets/club logos/380455215_344423764604830_7651998234831989610_n.jpg"
import club_logo3 from "../assets/club logos/2.png"
// Import Swiper
import Swiper, { Autoplay } from 'swiper'
import 'swiper/css'

Swiper.use([Autoplay])

export default {
  name: 'Clients',
  setup() {
    onMounted(() => {
      const carousel = new Swiper('.clients-carousel', {
        slidesPerView: 'auto',
        spaceBetween: 16,
        centeredSlides: true,
        loop: true,
        speed: 5000,
        noSwiping: true,
        noSwipingClass: 'swiper-slide',
        autoplay: {
          delay: 0,
          disableOnInteraction: true,
        },
      })
    })
  },
  data(){
    return{
      club_logo1,
      club_logo2,
      club_logo3
    }
  }
}
</script>
