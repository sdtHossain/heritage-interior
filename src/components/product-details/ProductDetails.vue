<script setup lang="ts">
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
const { isProductModalOpen } = storeToRefs(useProductStore())

const myswiper = ref()
const onSwiper = (swiper: any) => {
  myswiper.value = swiper
}
</script>
<template>
  <div class="">
    <div class="position-fixed bg-black vh-100 vw-100 z-3 top-0 d-flex align-items-center">
      <div class="container-fluid">
        <i
          class="ri-close-line text-white fs-3 position-absolute end-0 top-0 z-3"
          @click="isProductModalOpen = false"
        ></i>
        <div class="row">
          <div class="col-6">
            <div class="card mb-4">
              <img
                :src="`src/assets/images/product/product_1.jpeg`"
                height="400"
                class="card-img-top object-fit-cover"
                alt=""
              />
            </div>
            <div class="px-4">
              <swiper
                :slides-per-view="3"
                :space-between="50"
                :modules="[Navigation]"
                navigation
                :scrollbar="{ hide: true }"
                class="mySwiper w-100"
                @swiper="onSwiper"
              >
                <swiper-slide v-for="(item, index) in 4">
                  <img
                    :src="`src/assets/images/product/product_1.jpeg`"
                    class="card-img-top"
                    @click="isProductModalOpen = true"
                    alt=""
                  />
                </swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="col-6 text-white">
            <h5>Angel City Ring</h5>
            <p class="text-gray">Brand: Apple</p>
            <p class="text-gray">Product Code: product 20</p>
            <p class="text-gray mb-6">Availability: In Stock</p>
            <h6>$122.00 <span class="fs-6 text-gray ms-2">Ex Tax: $100.00</span></h6>

            <p>
              Qty: <input type="number" value="1" class="form-control w-25 mb-3" />
              <button class="btn btn-primary">Add To Cart</button>
            </p>
          </div>
        </div>
        <div class="row mt-15">
          <div class="col">
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Home
                </button>
                <button
                  class="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Profile
                </button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
                tabindex="0"
              >
                content
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
                tabindex="0"
              >
                content
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.product-modal {
  top: 0%;
  transform: translateY(-50);
}
</style>
