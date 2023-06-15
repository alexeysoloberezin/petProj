import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomePage.vue'
import LoginView from '../views/LoginPage.vue'
import RegisterPage from "@/views/RegisterPage.vue";
import ProfilePage from "@/views/ProfilePage.vue";
import RestApiPage from "@/views/RestApiPage.vue";
import ConstructorPage from "@/views/ConstructorPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: ProfilePage
  },
  {
    path: '/RestApiExamples',
    name: 'RestApiExamples',
    component: RestApiPage
  },
  {
    path: '/Constructor',
    name: 'Constructor',
    component: ConstructorPage
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
