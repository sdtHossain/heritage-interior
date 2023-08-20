<script setup lang="ts">
const props = defineProps({
  titleColor: {
    type: String,
    default: 'primary'
  },
  titleText: {
    type: String,
    required: true
  },
  slogan: {
    type: String,
    required: true
  }
})
</script>
<template>
  <h6 :class="`mb-5 text-${titleColor} text-uppercase`">{{ titleText }}</h6>
  <h2 class="fs-1 mb-15">{{ slogan }}</h2>
</template>
<style scoped></style>
