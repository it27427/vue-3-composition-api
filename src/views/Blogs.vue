<script setup lang="ts">
  // import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { blogs } from '../assets/blogs'

  const router = useRouter()
  const goToBlog = (id: number) => {
    router.push({ path: `/blog/${id}` })
  }
</script>

<template>
  <h1>This is Blogs Page</h1>
   <div class="list-group">
    <a
      class="bloglink"
      v-for="(blog, i) in blogs"
      :key="i"
      @click="goToBlog(i)"
    >
      <div class="blog">
        <figure class="blog-thumbnail">
          <img :src="blog.imgSrc" height="40" />
        </figure>
        <div class="blog-body">
          <p class="blog-text">{{ blog.text }}</p>
        </div>
      </div>
    </a>
  </div>
</template>