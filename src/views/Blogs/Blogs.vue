<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter() as any

  const blogs = ref(null);
  const url = 'http://localhost:3000/blogs'

  fetch(url)
    .then(res => res.json())
    .then(data => blogs.value = data)
    .catch(error => console.error(error.message))

  
</script>

<template>
  <div v-if="jobs.length">
    <div v-for="(blog: any) in blogs" :key="blog.id">
      <router-link :to="{ name: 'BlogDetails', params: { id: blog.id } }" class="bloglink">
        <div class="blog">
          <figure class="blog-thumbnail">
            <img :src="blog.imgSrc" height="200" />
          </figure>
          <div class="blog-body">
            <p class="blog-text">{{ blog.text }}</p>
          </div>
        </div>
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>