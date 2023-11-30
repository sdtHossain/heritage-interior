<script setup lang="ts">
import TheBanner from '@/components/home/TheBanner.vue'
import HighlightedProduct from '@/components/home/HighlightedProduct.vue'
import BestSellingProducts from '@/components/home/BestSellingProducts.vue'
import IconCardThreeCol from '@/components/common/IconCardThreeCol.vue'
import WeProvide from '@/components/home/WeProvide.vue'
import FeaturedProducts from '@/components/home/FeaturedProducts.vue'
import ProductDetails from '@/components/product-details/ProductDetails.vue'
import { ref } from 'vue'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
import ProductCardGrid from '@/components/common/ProductCardGrid.vue'
import TwoColumnImageAndText from '@/components/common/TwoColumnImageAndText.vue'
import ProjectShowcase from '@/components/home/ProjectShowcase.vue'
import { ApiProductsGetCollection } from '@/openapi/operations/ApiProductsGetCollection'

const { isProductModalOpen } = storeToRefs(useProductStore())

// const products = await ApiProductsGetCollection()
</script>

<template>
  <main>
    <ProductDetails v-if="isProductModalOpen" />
    <TheBanner />
    <HighlightedProduct class="mt-7" />
    <ProjectShowcase class="mt-20" />
    <ProductCardGrid class="my-15" />
    <BestSellingProducts class="pt-20" />
    <FeaturedProducts class="pt-20" />
    <!-- <WeProvide class="py-20" /> -->
  </main>
</template>
