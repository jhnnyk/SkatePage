<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'Home' }" class="logo"> SKATE.page </RouterLink>
      <RouterLink :to="{ name: 'Home' }"> Home </RouterLink>
      <RouterLink :to="{ name: 'About' }"> About </RouterLink>
    </nav>
  </header>

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

nav {
  background: #245096;
  padding: 15px 25px;
}

nav a {
  color: white;
  text-decoration: none;
  padding-right: 1em;
}

nav a.logo {
  font-size: 1.4em;
  font-weight: bold;
}

main {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
