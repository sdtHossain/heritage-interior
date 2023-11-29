<script setup lang="ts">
import ProductCardFourCol from '../common/ProductCardFourCol.vue'
import SectionTitle from '../common/SectionTitle.vue'
</script>
<template>
  <div class="container text-center">
    <SectionTitle title-text="Our Bestselling" slogan="Our Jewelry Selection" />
    <ProductCardFourCol gutter="g-5" product-type="best_selling" />
  </div>
</template>
<style scoped></style>
