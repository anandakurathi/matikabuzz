<script setup>
import { RouterLink } from "vue-router";
import { useAuth } from "@/stores/auth";

const auth = useAuth();
</script>

<template>
  <h1>Welcome to Dashboard !!!</h1>
  <template v-if="auth.check">
    <button @click="auth.logout" class="router-link">Logout</button>
  </template>
  <template v-else>
    <RouterLink class="router-link" :to="{ name: 'register' }">
      Register
    </RouterLink>
  </template>
</template>