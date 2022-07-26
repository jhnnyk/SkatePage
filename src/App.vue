<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header class="container m-8">
    <nav class="flex items-center">
      <RouterLink :to="{ name: 'Home' }" class="text-xl font-bold mr-6"
        >SKATE.page</RouterLink
      >
      <RouterLink :to="{ name: 'Home' }" class="mr-6 text-sky-900"
        >Home</RouterLink
      >
      <RouterLink :to="{ name: 'About' }" class="mr-6 text-sky-900"
        >About</RouterLink
      >
    </nav>
  </header>

  <main class="container mx-8">
    <RouterView />
  </main>
</template>
