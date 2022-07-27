<script setup>
import { ref } from 'vue';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const name = ref('');
const email = ref('');
const password = ref('');
const auth = getAuth();

const signup = () => {
  console.log(email, password);
  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
      console.log(user);
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
  <form @submit.prevent="signup">
    <h2>Sign Up</h2>
    <label>
      Name
      <input v-model="name" type="text" placeholder="" />
      {{ name }}
    </label>

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

    <button>Sign Up</button>
  </form>
</template>
