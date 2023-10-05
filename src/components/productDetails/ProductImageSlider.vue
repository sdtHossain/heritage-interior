<script setup lang="ts">
import { ref } from 'vue'

const activeSliderImage = ref(0)
</script>
<template>
  <div id="productCarousel" class="carousel slide">
    <div class="carousel-inner">
      <div
        v-for="(item, index) in [1, 2]"
        :class="index == activeSliderImage ? 'active' : ''"
        class="carousel-item position-relative"
      >
        <div class="">
          <img
            :src="`/src/assets/images/product/product_${index + 1}.jpeg`"
            class="d-block w-100 product-image object-fit-cover"
            alt=""
          />
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#productCarousel"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#productCarousel"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>

  <!-- product images -->
  <div class="row row-cols-5 g-4 navigation-images mt-4">
    <div v-for="(item, index) in [1, 2]" @click="activeSliderImage = index" class="col">
      <div class="card">
        <img
          :src="`/src/assets/images/product/product_${index + 1}.jpeg`"
          class="card-img-top"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<style scoped>
.product-image {
  height: inherit;
}

.carousel-item img {
  height: 400px;
}

.navigation-images img {
  height: 80px;
}
</style>
