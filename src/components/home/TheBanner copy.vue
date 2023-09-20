<script setup lang="ts">
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/scss/navigation'
import DropdownMenu from '@/components/dropdownMenu/DropdownMenu.vue'

import ActionButton from '../common/ActionButton.vue'

const myswiper = ref()
const onSwiper = (swiper: any) => {
  myswiper.value = swiper
}
</script>
<template>
  <div class="home-banner">
    <DropdownMenu />
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :modules="[Navigation, Autoplay]"
      :autoplay="{
        delay: 5500,
        disableOnInteraction: false
      }"
      navigation
      :scrollbar="{ hide: true }"
      class="mySwiper"
      @swiper="onSwiper"
    >
      <swiper-slide>
        <div class="h-100">
          <div class="position-absolute z-0">
            <img src="@/assets/images/banner-bg-1.jpeg" class="img-fluid" alt="" />
          </div>
          <div class="container position-relative h-100">
            <div class="row align-items-center h-100">
              <div class="col-lg-6">
                <h1 class="fw-lighter lh-1 mb-3 text-white">Classic Jewellery Collection</h1>
                <p class="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit vero
                  facilis rem commodi quo nihil alias officia, sequi quae?
                </p>
                <ActionButton label="Shop Now" size="large" />
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-100">
          <div class="position-absolute z-0">
            <img src="@/assets/images/banner-bg-1.jpeg" class="img-fluid" alt="" />
          </div>
          <div class="container position-relative h-100">
            <div class="row align-items-center h-100">
              <div class="col-lg-6">
                <h1 class="display-5 fw-lighter lh-1 mb-3 text-white">
                  Classic Jewellery Collection
                </h1>
                <p class="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus impedit vero
                  facilis rem commodi quo nihil alias officia, sequi quae?
                </p>
                <button
                  class="btn btn-outline-primary rounded-0 border-white py-3 px-5 mt-4 text-white"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
