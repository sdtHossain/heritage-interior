<script setup lang="ts">
const props = defineProps({
  imagePostion: {
    type: String,
    default: 'right'
  },
  imageSrc: {
    type: String,
    default: '/src/assets/images/hero_banner.jpg'
  },
  title: {
    type: String,
    default: 'Lorem Ipsum dolor sit amet'
  },
  description: {
    type: String,
    default: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quis dolor
          doloremque aliquam veniam ducimus error cupiditate veritatis excepturi eos consequatur a
          dolore adipisci voluptas doloribus vero officia, aperiam optio?`
  }
})
</script>
<template>
  <div class="container">
    <div class="row align-items-center" :class="imagePostion == 'left' ? 'flex-row-reverse' : ''">
      <div class="col-6">
        <h3>{{ title }}</h3>
        <p>
          {{ description }}
        </p>
      </div>
      <div class="col-6">
        <img class="w-100" :src="imageSrc" alt="" />
      </div>
    </div>
  </div>
</template>
