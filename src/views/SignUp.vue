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
    <div class="py-12">
      <h2 class="text-2xl font-bold">Sign Up</h2>
      <div class="mt-8 max-w-md">
        <div class="grid grid-cols-1 gap-6">
          <label class="block">
            <span class="text-gray-700">Name</span>
            <input
              v-model="name"
              type="text"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder=""
            />
            {{ name }}
          </label>

          <label class="block">
            <span class="text-gray-700">Email address</span>
            <input
              v-model="email"
              type="email"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="john@example.com"
            />

            {{ email }}
          </label>

          <label class="block">
            <span class="text-gray-700">Password</span>
            <input
              v-model="password"
              type="password"
              class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              placeholder="password"
            />
            {{ password }}
          </label>

          <button class="text-white bg-sky-900 rounded-md p-2">Sign Up</button>
        </div>
      </div>
    </div>
  </form>
</template>
