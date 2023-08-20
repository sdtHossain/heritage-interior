<script setup lang="ts">
import TheBanner from '@/components/home/TheBanner.vue'
import HighlightedProduct from '@/components/home/HighlightedProduct.vue'
import BestSellingProducts from '@/components/home/BestSellingProducts.vue'
import IconCardThreeCol from '@/components/common/IconCardThreeCol.vue'
import WeProvide from '@/components/home/WeProvide.vue'
import FeaturedProducts from '@/components/home/FeaturedProducts.vue'
import FooterTop from '@/components/layout/FooterTop.vue'
import FooterView from '@/components/layout/Footer.vue'
import ProductDetails from '@/components/product-details/ProductDetails.vue'
import { ref } from 'vue'
import { useProductStore } from '@/stores/product'
import { storeToRefs } from 'pinia'
const { isProductModalOpen } = storeToRefs(useProductStore())
</script>

<template>
  <main>
    <ProductDetails v-if="isProductModalOpen" />
    <TheBanner />
    <HighlightedProduct class="mt-7" />
    <BestSellingProducts class="pt-20" />
    <FeaturedProducts class="pt-20" />
    <!-- <WeProvide class="py-20" /> -->
    <FooterTop class="mt-20" />
    <FooterView />
  </main>
</template>
