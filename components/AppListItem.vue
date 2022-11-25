<script setup>
defineProps({
  brand: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <li :class="brand ? 'text-green-500' : 'text-slate-900'"><slot></slot></li>
</template>
