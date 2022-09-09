<script setup lang="ts">
  import { ref } from 'vue'

  const props = defineProps(['id'])
  const blog = ref(null);

  const url = ('http://localhost:3000/blogs/' + props.id)
  fetch(url)
    .then(res => res.json())
    .then(data => blog.value = data)
    .catch(error => console.error(error.message))

</script>

<template>
  <div v-if="blog" class="blog-details">
    <figure class="blog-thumbnail">
      <img :src="blog.imgSrc" />
    </figure>

    <p>{{ blog.text }}</p>
  </div>

  <div v-else>
    <p>Loading Blog Details...</p>
  </div>
</template>