<script setup lang="ts">
import { LoginCheckPost } from '@/openapi/operations'
import { ref } from 'vue'

const userEmail = ref('')
const userPassword = ref()

const handleSubmit = async () => {
  const loginReq = await LoginCheckPost({
    email: userEmail.value,
    password: userPassword.value
  })

  console.log(userEmail.value, userPassword.value)
}
</script>
<template>
  <div class="container">
    <form @submit.prevent="handleSubmit">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          v-model="userEmail"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          v-model="userPassword"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>
<style scoped></style>
