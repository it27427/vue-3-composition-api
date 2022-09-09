import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { blogs } from '../assets/blogs'

// AUTHENTICATION ROUTES
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

// GENERAL ROUTES
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs/Blogs.vue'
import BlogDetails from '../views/Blogs/BlogDetails.vue'
import Contact from '../views/Contact.vue'

// ERROR 404 PAGE NOT FOUND ROUTE
import NotFound from '../views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/blogs',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/blogs/:id',
    name: 'BlogDetails',
    component: BlogDetails,
    props: true
  },
  {
    path: '/all-blogs',
    redirect: '/blogs'
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
