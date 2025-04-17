<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Toaster } from '@/components/ui/sonner'

</script>

<template>
  <Toaster />
  <header class="bg-primary-600 p-5 flex w-full">
    <div class="flex gap-3 items-center justify-center">
      <img src="/ejc.jpeg" alt="EJC Logo" class="w-10 h-10 rounded-full" />
      <h1 class="font-serif text-white">EDINBURGH JESUIT CHURCH OF THE SACRED HEART</h1>
    </div>
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
