<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'Home' }"> SKATE.page </RouterLink>
      <RouterLink :to="{ name: 'Home' }"> Home </RouterLink>
      <RouterLink :to="{ name: 'About' }"> About </RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>
