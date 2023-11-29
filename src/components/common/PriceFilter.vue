<script setup lang="ts">
import { ref } from 'vue'

const minValue = ref(0)
const maxValue = ref(0)
const maxRangeAmount = ref(998)
</script>
<template>
  <div class="position-relative range-input">
    <input
      type="range"
      class="range-min position-absolute w-100"
      min="0"
      max="1000"
      v-model="minValue"
    />
    <input
      type="range"
      class="range-max position-absolute w-100"
      v-model="maxValue"
      min="0"
      max="1000"
    />

    <!-- <div class="range-slider">
              <div class="slider-min-max"></div>
            </div> -->

    <div
      class="progress"
      role="progressbar"
      aria-label="Basic example"
      aria-valuenow="0"
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        class="progress-bar rounded-4"
        :style="{
          marginLeft: (minValue / maxRangeAmount) * 100 + '%',
          width: ((maxValue - minValue) * 100) / maxRangeAmount + '%'
        }"
      ></div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.range-input input {
  // -webkit-appearance: none;
  // pointer-events: none;
}

.progress,
.progress-bar {
  transition: none;
}

.range-input input {
  background: none;
  -webkit-appearance: none;
  pointer-events: none;
}
input[type='range']::-webkit-slider-thumb {
  height: 17px;
  width: 17px;
  border-radius: 50%;
  -webkit-appearance: none;
  background: #944500;
  pointer-events: auto;
}
</style>
