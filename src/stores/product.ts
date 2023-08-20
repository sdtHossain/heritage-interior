import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {
  const isProductModalOpen = ref(false)

  return { isProductModalOpen }
})
