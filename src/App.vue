<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Toaster } from '@/components/ui/sonner'

</script>

<template>
  <Toaster />
  <header class="bg-primary-600 p-5 flex w-full">
    <h1 class="font-serif text-white">EDINBURGH JESUIT CHURCH OF THE SACRED HEART</h1>
<!--    <div class="wrapper">-->
<!--      <nav>-->
<!--        <RouterLink to="/">Home</RouterLink>-->
<!--        <RouterLink to="/about">About</RouterLink>-->
<!--      </nav>-->
<!--    </div>-->
  </header>

  <RouterView />
</template>

<style scoped>

</style>
