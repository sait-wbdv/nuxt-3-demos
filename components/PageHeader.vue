<script setup>
defineProps({
  title: String,
});
</script>
<template>
  <header
    class="container flex justify-center text-5xl font-bold my-8 text-center"
  >
    <h1>{{ title }}</h1>
  </header>
</template>
