<script setup lang="ts">
const props = defineProps({
  itemColor: {
    type: String,
    default: ''
  }
})
</script>
<template>
  <div class="container py-2">
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
        <RouterLink :to="{ name: 'home' }" :class="`nav-link text-${itemColor}`">FAQs</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink :to="{ name: 'about' }" :class="`nav-link text-${itemColor}`">About</RouterLink>
      </li>
    </ul>
  </div>
</template>
<style scoped></style>
