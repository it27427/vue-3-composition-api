import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { blogs } from '../assets/blogs'

// AUTHENTICATION ROUTES
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

// ERROR 404 PAGE NOT FOUND ROUTE
import PageNotFound from '../views/PageNotFound.vue'

// GENERAL ROUTES
import Home from '../views/Home.vue'
import Blogs from '../views/Blogs.vue'
import Blog from '../views/Blog.vue'
import Contact from '../views/Contact.vue'

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
    path: '/blog/:id',
    name: 'Blog',
    component: Blog,
    beforeEnter: (to, _, next) => {
      const { id } = to.params

      if (Array.isArray(id)) {
        next({ path: '/error' })
        return
      }

      // Is a valid index number
      const index = parseInt(id)
      if (index < 0 || index >= facts.length) {
        next({ path: '/error' })
        return
      }

      next()
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: PageNotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
