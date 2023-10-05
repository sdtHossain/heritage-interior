<script setup lang="ts">
import { ref } from 'vue'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/scss/navigation'
import SectionTitle from '../common/SectionTitle.vue'

import ActionButton from '../common/ActionButton.vue'

const myswiper = ref()
const onSwiper = (swiper: any) => {
  myswiper.value = swiper
}
</script>
<template>
  <div class="container pt-20">
    <SectionTitle title-text="Our Trendy Projects" title-color="primary" slogan="Our Projects" />
  </div>
  <div class="">
    <swiper
      :slides-per-view="1"
      :space-between="50"
      :modules="[Navigation]"
      :autoplay="{
        delay: 5500,
        disableOnInteraction: false
      }"
      navigation
      :scrollbar="{ hide: true }"
      class="mySwiper overflow-y-visible"
      @swiper="onSwiper"
    >
      <swiper-slide>
        <div class="h-100 slider-content">
          <div class="row g-0">
            <div class="col-md-6">
              <img
                src="../../assets/images/project1.jpg"
                class="img-fluid slider-img w-100"
                alt=""
              />
            </div>
            <div class="col-md-6 bg-primary bg-opacity-10">
              <div class="p-4 d-flex flex-column h-100 justify-content-center project-desc">
                <h3 class="project-title">We are building Turf</h3>
                <div class="">
                  <button class="btn btn-primary d-inline-block text-white see-more-btn">
                    See now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="h-100 slider-content">
          <div class="row g-0">
            <div class="col-md-6">
              <img
                src="../../assets/images/project1.jpg"
                class="img-fluid slider-img w-100"
                alt=""
              />
            </div>
            <div class="col-md-6 bg-primary bg-opacity-10">
              <div class="p-4 d-flex flex-column h-100 justify-content-center project-desc">
                <h3 class="project-title">We are building Turf</h3>
                <div class="">
                  <button class="btn btn-primary d-inline-block text-white see-more-btn">
                    See now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped lang="scss">
/* .project-desc {
  bottom: -25px;
  left: -60px;
  box-shadow: 19px 18px 71px -3px rgba(0, 0, 0, 0.05);
} */
.project-desc {
  h3 {
    font-size: 72px;
  }
  max-width: 250px;
  margin-left: auto;
  margin-right: auto;
}

.see-more-btn {
  width: 150px;
  height: 56px;
  font-size: 24px;
  font-weight: 600;
}
</style>
