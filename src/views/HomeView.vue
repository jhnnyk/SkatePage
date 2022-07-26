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
      // console.log(`${doc.id} => ${doc.data()}`);
    });
  } catch (err) {
    console.log(err);
  }
};

loadSkateparks();
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold underline text-sky-900">
      Welcome to Skate.page
    </h1>
    {{ skateparks }}
  </main>
</template>
