<script setup lang="ts">
import { ref } from 'vue'
import ProductImageSlider from '@/components/productDetails/ProductImageSlider.vue'
import ProductDescription from '@/components/productDetails/ProductDescription.vue'
import ProductInfo from '@/components/productDetails/ProductInfo.vue'
</script>
<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-5">
        <ProductImageSlider />
      </div>

      <div class="col-lg-7">
        <ProductDescription />
      </div>
    </div>
    <ProductInfo />
  </div>
</template>
<style scoped lang="scss"></style>
