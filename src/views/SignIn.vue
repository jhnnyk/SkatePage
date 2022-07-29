<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const router = useRouter();

const email = ref('');
const password = ref('');
const auth = getAuth();

const signin = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);
      router.push({ name: 'Home' });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode, errorMessage);
    });
};
</script>

<template>
  <form @submit.prevent="signin">
    <h2>Sign Up</h2>

    <label>
      Email address
      <input v-model="email" type="email" placeholder="john@example.com" />

      {{ email }}
    </label>

    <label>
      Password
      <input v-model="password" type="password" placeholder="password" />
      {{ password }}
    </label>

    <button>Sign In</button>
  </form>
</template>
