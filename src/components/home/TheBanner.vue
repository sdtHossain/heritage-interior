<script setup lang="ts">
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/scss/navigation'

import ActionButton from '../common/ActionButton.vue'

const myswiper = ref()
const onSwiper = (swiper: any) => {
  myswiper.value = swiper
}

const props = defineProps({
  products: {
    type: Array
  }
})
</script>
<template>
  <div class="home-banner position-relative">
    <!-- <DropdownMenu class="position-relative z-1" /> -->
    <div class="position-absolute z-0 top-0 h-100 w-100 bg-secondary">
      <!-- <img
        src="../../assets/images/banner-bg-1.jpeg"
        class="img-fluid object-fit-cover w-100 h-100"
        alt=""
      /> -->
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
        <template v-if="products">
          <swiper-slide v-for="product in products">
            <div class="h-100 slider-content">
              <div class="h-100 container">
                <div class="h-100 row">
                  <div class="col-md-9 offset-md-3">
                    <div class="h-100 row align-items-center">
                      <div class="col-md-5">
                        <h1 class="mb-3">{{ product.name }}</h1>
                        <p class="">
                          {{ product.summary }}
                        </p>
                        <ActionButton label="Shop Now" size="large" class="bg-primary" />
                      </div>
                      <div class="col-md-7">
                        <img
                          src="../../assets/images/woodmart/slider-main-demo-1.jpg"
                          class="img-fluid slider-img"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </template>
      </swiper>
    </div>
  </div>
</template>
