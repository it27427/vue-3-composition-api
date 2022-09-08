<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRoute } from 'vue-router'

  const props = defineProps({
    to: { type: String, required: true },
    exact: { type: Boolean, default: false }
  })

  const route = useRoute()
  const active = computed(() =>
    props.exact ? route.path === props.to : route.path.startsWith(props.to)
  )
  const isActive = ref<Boolean>(false)
</script>

<template>
  <router-link :to="to" class="headerlist-link" :class="{ active: isActive }">
    <slot />
  </router-link>
  
    <router-view></router-view>
</template>