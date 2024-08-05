<script setup></script>

<template>
  <div class="container my-5">
    <div class="p-5 text-center bg-dark rounded-3 align-items-center">
      <img
        class="me-3"
        src="../assets/images/brand/bootstrap-logo.svg"
        alt=""
        width="100"
        height="90"
      />
      <h1 class="text-body-emphasis">Jumbotron with icon</h1>
      <p class="col-lg-8 mx-auto fs-5 text-light">
        This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps
        early thanks to a responsive <code>.col-*</code> class, and a customized call to action.
      </p>
      <div class="d-inline-flex gap-2 mb-5 align-items-center">
        <!--        <a href="$route.name=" class="btn btn-primary px-3 rounded-pill" type="button">-->
        <!--          <font-awesome-icon icon="arrow-right" />-->
        <!--        </a>-->
        <router-link :to="{name: 'Login'}"
          class="btn btn-sm btn-primary px-3 rounded-pill"
        >
          <font-awesome-icon :icon="['fas', 'arrow-right-to-bracket']" /> Login
        </router-link>
        <router-link :to="{name: 'Register'}"
          class="btn btn-sm btn-primary px-3 rounded-pill"
        >
          <font-awesome-icon :icon="['fas', 'user']" /> Register
        </router-link>
      </div>
    </div>
  </div>
</template>
