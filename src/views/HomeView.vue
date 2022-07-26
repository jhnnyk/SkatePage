<script setup>
import { ref } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebase/config';

const skateparks = ref([]);

const loadSkateparks = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'skateparks'));
    querySnapshot.forEach((doc) => {
      skateparks.value.push({ ...doc.data(), id: doc.id });
    });
  } catch (err) {
    console.log(err);
  }
};

loadSkateparks();
</script>

<template>
  <h1 class="text-3xl font-bold underline text-sky-900">
    Welcome to SKATE.page
  </h1>
  <ul>
    <li v-for="skatepark in skateparks" :key="skatepark.id">
      {{ skatepark.name }}<br />
      {{ skatepark.location }}
    </li>
  </ul>
</template>
