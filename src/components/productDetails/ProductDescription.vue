<script setup lang="ts">
import { ref } from 'vue'
const productSize = ref('')
const productColor = ref('')
const count = ref(0)
</script>
<template>
  <h3 class="mb-5">Colorful Stylish Shirt</h3>
  <ul class="list-unstyled list-inline mb-2">
    <li class="list-inline-item"><i class="ri-star-fill"></i></li>
    <li class="list-inline-item"><i class="ri-star-fill"></i></li>
    <li class="list-inline-item"><i class="ri-star-fill"></i></li>
    <li class="list-inline-item"><i class="ri-star-line"></i></li>
    <li class="list-inline-item"><i class="ri-star-line"></i></li>
  </ul>
  <h5 class="mb-4 text-primary">$150.00</h5>
  <p class="mb-4 text-gray">
    <small>
      Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea. Sanc
      invidunt ipsum et, labore clita lorem magna lorem ut. Erat lorem duo dolor no sea nonumy.
      Accus labore stet, est lorem sit diam sea et justo, amet at lorem et eirmod ipsum diam et
      rebum kasd rebum.
    </small>
  </p>
  <div class="d-flex align-items-center mb-3 product-size">
    <p class="text-dark font-weight-medium mb-0 mr-3">Sizes:</p>
    <p class="d-flex align-items-center justify-content-center">
      <input type="radio" id="ps1" value="sm" name="product-size" v-model="productSize" />
      <label
        for="ps1"
        class="p-1 border"
        :class="productSize == 'sm' ? 'border-primary' : 'border-dark'"
        >SM</label
      >
    </p>
    <p class="d-flex align-items-center justify-content-center">
      <input type="radio" id="ps2" value="m" name="product-size" v-model="productSize" />
      <label
        for="ps2"
        class="p-1 border"
        :class="productSize == 'm' ? 'border-primary' : 'border-dark'"
        >M</label
      >
    </p>
    <p class="d-flex align-items-center justify-content-center">
      <input type="radio" id="ps3" value="lg" name="product-size" v-model="productSize" />
      <label
        for="ps3"
        class="p-1 border"
        :class="productSize == 'lg' ? 'border-primary' : 'border-dark'"
        >LG</label
      >
    </p>
  </div>
  <div class="d-flex align-items-center mb-4 product-color">
    <p class="text-dark font-weight-medium mb-0 mr-3">Colors:</p>
    <p class="d-flex align-items-center">
      <input type="radio" id="test1" value="red" name="product-color" v-model="productColor" />
      <label for="test1" class="red">
        <span style="background-color: rgb(247, 5, 5)"></span>
      </label>
    </p>
    <p class="d-flex align-items-center">
      <input type="radio" id="test2" value="orange" name="product-color" v-model="productColor" />
      <label for="test2" class="red">
        <span style="background-color: rgb(247, 130, 5)"></span>
      </label>
    </p>
    <p class="d-flex align-items-center">
      <input type="radio" id="test3" value="green" name="product-color" v-model="productColor" />
      <label for="test3" class="red">
        <span style="background-color: rgb(114, 247, 5)"></span>
      </label>
    </p>
    <!-- <form class="d-flex color-input">
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" class="custom-control-input" id="color-1" name="color" />
              <label class="custom-control-label" for="color-1">Black</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" class="custom-control-input" id="color-2" name="color" />
              <label class="custom-control-label" for="color-2">White</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" class="custom-control-input" id="color-3" name="color" />
              <label class="custom-control-label" for="color-3">Red</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" class="custom-control-input" id="color-4" name="color" />
              <label class="custom-control-label" for="color-4">Blue</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
              <input type="radio" class="custom-control-input" id="color-5" name="color" />
              <label class="custom-control-label" for="color-5">Green</label>
            </div>
          </form> -->
  </div>
  <div class="d-flex align-items-center mb-4 pt-2">
    <div class="input-group quantity mr-3" style="width: 130px">
      <div class="input-group-btn">
        <button @click="count--" class="btn btn-primary btn-minus rounded-0 rounded-start">
          <i class="ri-subtract-line"></i>
        </button>
      </div>
      <input type="text" class="form-control bg-secondary text-center" v-model="count" />
      <div class="input-group-btn">
        <button @click="count++" class="btn btn-primary btn-plus rounded-0 rounded-end">
          <i class="ri-add-line"></i>
        </button>
      </div>
    </div>
    <button class="btn btn-primary px-3 ms-3">
      <i class="fa fa-shopping-cart mr-1"></i> Add To Cart
    </button>
  </div>
  <div class="d-flex pt-2">
    <p class="text-dark font-weight-medium mb-0 mr-2">Share on:</p>
    <div class="d-inline-flex">
      <a class="text-dark px-2" href="">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a class="text-dark px-2" href="">
        <i class="fab fa-twitter"></i>
      </a>
      <a class="text-dark px-2" href="">
        <i class="fab fa-linkedin-in"></i>
      </a>
      <a class="text-dark px-2" href="">
        <i class="fab fa-pinterest"></i>
      </a>
    </div>
  </div>
</template>
<style scoped lang="scss">
.product-size {
  input[type='radio'] {
    position: absolute;
    left: -9999px;
  }

  input[type='radio'] + label {
    min-width: 30px;
    text-align: center;
  }

  p {
    margin-bottom: 0;
    margin-right: 10px;

    label {
      font-size: 14px;
    }
  }
}
.product-color {
  height: 40px;
  p {
    margin-bottom: 0;
    margin-right: 10px;
  }
  input[type='radio'] {
    position: absolute;
    left: -9999px;
  }
  input[type='radio']:checked + label {
    width: 30px;
    height: 30px;
  }
  label {
    position: relative;
    padding-left: 8px;
    cursor: pointer;
    line-height: 20px;
    display: inline-block;
    color: #666;
    width: 20px;
    height: 20px;
    transition: all 0.3s ease-in-out;

    span {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 50%;
    }
  }
}
</style>
