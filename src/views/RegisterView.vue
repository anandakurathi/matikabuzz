<script setup>
import { onBeforeUnmount } from "vue";
import { useRegister } from "@/stores/register";

const store = useRegister();

onBeforeUnmount(store.resetForm);
</script>
<template>
  <div class="container my-5">
    <main class="form-signin w-75 m-auto">
      <form @submit.prevent="store.handleSubmit">
        <img
          class="mb-4"
          src="../assets/images/brand/bootstrap-logo.svg"
          alt=""
          width="72"
          height="57"
        />
        <h1 class="h3 mb-3 fw-normal">Please sign up</h1>
        <div class="form-floating mb-3">
          <input
            v-model="store.form.name"
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Full Name"
            required
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            v-model="store.form.email"
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input
            v-model="store.form.password"
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating mb-3">
          <input
            v-model="store.form.confirm_password"
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
          />
          <label for="floatingPassword">Confirm Password</label>
        </div>
        <button class="btn btn-primary w-100 py-2" type="submit">Sign up</button>
        <p class="mt-5 mb-3 text-body-secondary">&copy; 2017–2024</p>
      </form>
    </main>
  </div>
</template>
<style></style>
