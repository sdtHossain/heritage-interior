<script setup lang="ts">
import { ref } from 'vue'
import ShopSidebar from '@/components/shop/ShopSidebar.vue'
import ShopBody from '@/components/shop/ShopBody.vue'
</script>
<template>
  <div class="container py-5">
    <div class="row">
      <div class="col-lg-3 shadow-sm py-4">
        <ShopSidebar />
      </div>

      <div class="col-lg-9">
        <ShopBody />
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss"></style>
