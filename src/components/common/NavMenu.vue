<script setup lang="ts">
import { ref } from 'vue'
import DropdownMenu from '@/components/dropdownMenu/DropdownMenu.vue'
const props = defineProps({
  itemColor: {
    type: String,
    default: ''
  },
  isHeader: {
    type: Boolean,
    default: true
  }
})

const isOpenDropdown = ref(false)
</script>

<template>
  <div class="container">
    <div class="row align-items-center">
      <div v-if="isHeader" class="col-lg-2">
        <ul class="nav position-relative justify-content-center py-3" :class="`bg-${itemColor}`">
          <li class="nav-item text-center text-white" @click="isOpenDropdown = !isOpenDropdown">
            <i class="ri-menu-line me-2"></i>
            All Categories
            <i class="ri-arrow-down-s-line ms-2"></i>
            <DropdownMenu
              class="position-absolute start-0 top-100 z-1 bg-white custom-dropdown-menu"
              :class="isOpenDropdown || $route.name == 'home' ? 'open' : ''"
            />
          </li>
        </ul>
      </div>
      <div :class="isHeader ? 'col-lg-10' : 'col-lg-12'">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <RouterLink to="/" :class="`nav-link text-${itemColor}`" aria-current="page"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'home' }" :class="`nav-link text-${itemColor}`"
              >Features</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'home' }" :class="`nav-link text-${itemColor}`"
              >Pricing</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'home' }" :class="`nav-link text-${itemColor}`"
              >FAQs</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink :to="{ name: 'about' }" :class="`nav-link text-${itemColor}`"
              >About</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
