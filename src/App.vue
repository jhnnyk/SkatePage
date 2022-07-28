<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const currentUser = ref(null);
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser.value = { ...user };
    console.log(currentUser.value);
  } else {
    console.log('no current user');
  }
});
</script>

<template>
  <header>
    <nav>
      <div>
        <RouterLink :to="{ name: 'Home' }" class="logo">
          SKATE.page
        </RouterLink>
        <RouterLink :to="{ name: 'Home' }"> Home </RouterLink>
        <RouterLink :to="{ name: 'About' }"> About </RouterLink>
      </div>
      <div v-if="currentUser">
        <RouterLink to="#">{{ currentUser.email }}</RouterLink>
        <RouterLink to="#"> Sign Out </RouterLink>
      </div>
      <div v-else>
        <RouterLink to="#"> Sign In </RouterLink>
        <RouterLink :to="{ name: 'SignUp' }"> Sign Up </RouterLink>
      </div>
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
  display: flex;
  align-items: center;
  justify-content: space-between;
}

nav div {
  display: flex;
  align-items: center;
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
