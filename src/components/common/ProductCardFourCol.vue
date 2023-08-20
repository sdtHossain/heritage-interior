<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import { ref } from 'vue'
import { Navigation } from 'swiper/modules'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
const { isProductModalOpen } = storeToRefs(useProductStore())

const myswiper = ref()
const onSwiper = (swiper: any) => {
  myswiper.value = swiper
}
const props = defineProps({
  productType: {
    type: String,
    default: 'product'
  }
})

const test = () => {
  console.log('clicked')
}
</script>
<template>
  <div class="container">
    <swiper
      :slides-per-view="4"
      :space-between="50"
      :modules="[Navigation]"
      navigation
      :scrollbar="{ hide: true }"
      class="mySwiper"
      @swiper="onSwiper"
    >
      <swiper-slide v-for="(item, index) in 4">
        <div class="">
          <div class="card border-0">
            <img
              :src="`src/assets/images/${productType}/product_${index + 1}.jpeg`"
              class="card-img-top"
              @click="isProductModalOpen = true"
              alt=""
            />
            <div class="card-body">
              <h6 class="categories text-primary text-uppercase mb-1">Accessories, Diamond</h6>
              <h5 class="product-title fw-light">Madorine Ear Ring</h5>
              <p class="sub-category text-gray mb-0">Gold Plated vermail</p>
              <p class="price">
                <span class="current fs-5 fw-bold">$65.00</span>
                <span class="previous text-gray text-decoration-line-through ms-1">$65.00</span>
              </p>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
img {
  height: 380px;
}
.categories {
  font-size: 12px;
}
.product-title {
  font-size: 18px;
}
.sub-category {
  font-size: 14px;
}
</style>
