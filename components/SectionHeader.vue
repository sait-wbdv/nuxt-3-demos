<script setup>
defineProps({
  title: String,
});
</script>
<template>
  <header class="text-3xl text-center py-4 font-semibold">
    <h2>{{ title }}</h2>
  </header>
</template>
