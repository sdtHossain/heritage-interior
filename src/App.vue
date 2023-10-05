<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
import FooterTop from '@/components/layout/FooterTop.vue'
import FooterView from '@/components/layout/Footer.vue'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    <TheHeader />
  </header>

  <RouterView />

  <FooterTop class="mt-20" />
  <FooterView />
</template>
