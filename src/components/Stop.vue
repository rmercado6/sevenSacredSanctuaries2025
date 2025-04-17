<script setup lang="ts">
defineProps<{
  name: string
  time: {
    arrival: string,
    departure: string
  }
  w3w: string
  reading: string
}>()
</script>

<template>
<div class="flex flex-col">
  <div class="flex">
    <h2>{{ name }}</h2>

  </div>

</div>
</template>

<style scoped>

</style>
