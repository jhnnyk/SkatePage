<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

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

const logout = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      currentUser.value = null;
    })
    .catch((error) => {
      // An error happened.
    });
};
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
        <a @click="logout"> Sign Out </a>
      </div>
      <div v-else>
        <RouterLink :to="{ name: 'SignIn' }"> Sign In </RouterLink>
        <RouterLink :to="{ name: 'SignUp' }"> Sign Up </RouterLink>
      </div>
    </nav>
  </header>
</template>

<style>
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

nav a:hover {
  cursor: pointer;
}

nav a.logo {
  font-size: 1.4em;
  font-weight: bold;
}
</style>
