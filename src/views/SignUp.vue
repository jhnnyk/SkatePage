<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';

const router = useRouter();

const displayName = ref('');
const email = ref('');
const password = ref('');
const auth = getAuth();

const signup = async () => {
  try {
    await createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log(user);
        router.push({ name: 'Home' });
      })
      .catch((err) => console.log(err));
    await updateProfile(auth.currentUser, {
      displayName: displayName.value,
    }).catch((err) => console.log(err));
  } catch (err) {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode, errorMessage);
  }
};
</script>

<template>
  <form @submit.prevent="signup">
    <h2>Sign Up</h2>
    <label>
      Display Name
      <input v-model="displayName" type="text" placeholder="" />
      {{ displayName }}
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
