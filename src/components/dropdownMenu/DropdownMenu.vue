<script setup lang="ts">
import jsonData from '@/data.json'
import RenderComponent from './RenderComponent.vue'
</script>
<template>
  <!-- <ul class="dropdown">
    <li>Menu 1</li>
    <li>Menu 2</li>
    <li>Menu 3</li>
  </ul> -->
  <div class="w-100">
    <div class="">
      <ul class="list-unstyled nav-menu d-flex flex-column align-items-start mb-0">
        <RenderComponent
          v-for="(item, index) in jsonData.menu"
          :key="index"
          :menuItem="item"
          iconColor="primary"
        />
      </ul>
    </div>
  </div>
</template>
