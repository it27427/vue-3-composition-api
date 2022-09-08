<script setup lang="ts">
  // import { defineComponent, ref } from 'vue'
</script>

<template>
  <header class="header">
    <nav class="header-nav">
      <HeaderLink to="/" exact class="logo">
        <img src="../assets/images/logo/logo.svg" alt="brand-logo">
      </HeaderLink>

      <ul class="headerlist">
        <li class="headerlist-item">
          <HeaderLink to="/" exact>Home</HeaderLink>
        </li>
        <li class="headerlist-item">
          <HeaderLink to="/blogs">Blogs</HeaderLink>
        </li>
        <li class="headerlist-item">
          <HeaderLink to="/contact">Contact</HeaderLink>
        </li>
      </ul>
    </nav>
    <router-view></router-view>
  </header>
</template>