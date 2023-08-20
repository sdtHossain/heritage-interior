<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'large'
  }
})
</script>
<template>
  <button
    :class="size == 'large' ? 'py-3' : 'py-2'"
    class="btn btn-outline-primary rounded-0 border-white px-5 mt-4 text-white"
  >
    {{ label }}
  </button>
</template>
