<script setup lang="ts">
import { ref } from 'vue'
import PriceFilter from '@/components/common/PriceFilter.vue'
const checkedCategories = ref([])
const checkedBrands = ref([])
</script>
<template>
  <div class="mb-5">
    <h3 class="fs-5 fw-semibold">Categories</h3>
    <div class="d-flex">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedCategories" />
      <label for="jack" class="ms-2">Jack</label>
      <span class="ms-auto">(5)</span>
    </div>
  </div>

  <div class="mb-5">
    <h3 class="fs-5 fw-semibold">Brands</h3>
    <div class="d-flex">
      <input type="checkbox" id="jack" value="Jack" v-model="checkedBrands" />
      <label for="jack" class="ms-2">Jack</label>
      <span class="ms-auto">(5)</span>
    </div>
  </div>

  <div>
    <h3 class="fs-5 fw-semibold">Price</h3>
    <PriceFilter />
  </div>
</template>
<style scoped></style>
