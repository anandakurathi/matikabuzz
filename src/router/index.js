import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/loginView.vue';
import DashboardView  from '@/views/DashboardView.vue'


function auth(to, from, next) {
  if (!localStorage.getItem("access_token")) {
    return next({ name: "register" });
  }

  next();
}

function guest(to, from, next) {
  if (localStorage.getItem("access_token")) {
    return next({ name: "vehicles.index" });
  }

  next();
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: "/register",
      name: "Register",
      beforeEnter:guest,
      component: RegisterView
    },
    {
      path: "/login",
      name: "Login",
      beforeEnter:guest,
      component: LoginView
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      beforeEnter:auth,
      component: DashboardView
    }
  ]
})

export default router
