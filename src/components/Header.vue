<script setup lang="ts">
  // import { defineComponent, ref } from 'vue'
  import HeaderLink from './HeaderLink.vue'

  components: { HeaderLink }
</script>

<template>
  <header class="header">
    <nav class="header-nav">
      <router-link to="/" class="logo">
        <img src="../assets/images/logo/logo.svg" alt="brand-logo" />
      </router-link>

      <ul class="headerlist">
        <li class="headerlist-item">
          <router-link to="/">Home</router-link>
        </li>
        <li class="headerlist-item">
          <router-link to="/blogs">Blogs</router-link>
        </li>
        <li class="headerlist-item">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="headerlist-item">
          <router-link to="/login">Login</router-link>
        </li>
        <li class="headerlist-item">
          <router-link to="/register">Register</router-link>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </header>
</template>