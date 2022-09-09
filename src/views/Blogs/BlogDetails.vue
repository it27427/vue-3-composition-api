<script setup lang="ts">
  // import { defineComponent, ref } from 'vue'
  const props = defineProps(['id'])

</script>

<template>
  <h1>This is Blog {{ props.id }} Page</h1>
</template>