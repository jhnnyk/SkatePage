<script setup>
import NavBar from './components/NavBar.vue';
</script>

<template>
  <NavBar />

  <main>
    <RouterView />
  </main>
</template>

<style>
body {
  font-family: Helvetica, Arial, sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
