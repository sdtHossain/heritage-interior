<script setup lang="ts">
import { ref } from 'vue'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
const { isProductModalOpen } = storeToRefs(useProductStore())
const props = defineProps({
  productType: {
    type: String,
    default: 'product'
  },
  imgName: {
    type: String,
    default: 'product_1.jpeg'
  }
})
</script>
<template>
  <div class="card border-0">
    <img
      :src="`src/assets/images/${productType}/${imgName}`"
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
</template>
<style scoped>
.card-img-top {
  height: 380px;
}
</style>
