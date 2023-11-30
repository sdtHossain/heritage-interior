<script setup lang="ts">
import ActionButton from '../common/ActionButton.vue'

const props = defineProps({
  highlightedProducts: {
    type: Array
  }
})
</script>
<template>
  <div class="container-fluid px-0">
    <div class="row mx-0 g-0">
      <div
        class="col"
        :class="[index == 0 ? 'ps-0' : '', index == 2 ? 'pe-0' : '']"
        v-for="(product, index) in highlightedProducts?.slice(0, 3)"
      >
        <div class="position-relative h-100">
          <img
            src="@/assets/images/highlighted_product_img_1.jpeg"
            alt=""
            class="position-absolute w-100 h-100"
          />

          <div class="content position-relative px-14 py-20 w-50">
            <h3 class="fs-1 fw-lighter text-white">{{ product.name }}</h3>
            <p class="text-white">{{ product.summary }}</p>

            <ActionButton label="View More" size="small" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
