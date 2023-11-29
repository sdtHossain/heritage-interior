<script setup lang="ts">
import { ref } from 'vue'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import ProductCard from './ProductCard.vue'
const { isProductModalOpen } = storeToRefs(useProductStore())

const props = defineProps({
  productType: {
    type: String,
    default: 'product'
  },
  gutter: {
    type: String,
    default: 'g-3'
  }
})
</script>
<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-4" :class="gutter">
      <div class="col" v-for="(item, index) in [1, 2, 3, 4]">
        <ProductCard product-type="best_selling" :img-name="`product_${index + 1}.jpeg`" />
      </div>
    </div>
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
