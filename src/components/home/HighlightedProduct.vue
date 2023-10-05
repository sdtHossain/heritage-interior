<script setup lang="ts">
import ActionButton from '../common/ActionButton.vue'
</script>
<template>
  <div class="container-fluid px-0">
    <div class="row mx-0 g-0">
      <div class="col ps-0">
        <div class="position-relative">
          <img
            src="@/assets/images/highlighted_product_img_1.jpeg"
            alt=""
            class="position-absolute w-100 h-100"
          />

          <div class="content position-relative px-14 py-20 w-50">
            <h3 class="fs-1 fw-lighter text-white">Cable Twist Bracelets</h3>
            <p class="text-white">Lorem ipsum dolor sit amet</p>

            <ActionButton label="View More" size="small" />
          </div>
        </div>
      </div>
      <div class="col">
        <div class="position-relative">
          <img
            src="@/assets/images/highlighted_product_img_2.jpeg"
            alt=""
            class="position-absolute w-100 h-100"
          />

          <div class="content position-relative px-14 py-20 w-50">
            <h3 class="fs-1 fw-lighter text-white">Cable Twist Bracelets</h3>
            <p class="text-white">Lorem ipsum dolor sit amet</p>

            <ActionButton label="View More" size="small" />
          </div>
        </div>
      </div>
      <div class="col pe-0">
        <div class="position-relative">
          <img
            src="@/assets/images/highlighted_product_img_3.jpeg"
            alt=""
            class="position-absolute w-100 h-100"
          />

          <div class="content position-relative px-14 py-20 w-50">
            <h3 class="fs-1 fw-lighter text-white">Cable Twist Bracelets</h3>
            <p class="text-white">Lorem ipsum dolor sit amet</p>

            <ActionButton label="View More" size="small" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
