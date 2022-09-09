<script setup lang="ts">
  // import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { blogs } from '../../assets/blogs'

  const router = useRouter()

  console.log(router.params);
  const goToBlog = (id: string) => {
    router.push({ path: `/blog/${id}` })
  }
</script>

<template>
   <div v-for="(blog, i) in blogs" :key="i">
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
    <router-view></router-view>
  </div>
</template>