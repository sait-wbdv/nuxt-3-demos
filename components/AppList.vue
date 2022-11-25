<script setup>
defineProps({
  ordered: {
    type: Boolean,
    default: false,
  },
  bullets: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div class="container my-4 mx-4 max-w-lg md:mx-12">
    <!-- if ordered == true use this -->
    <ol v-if="ordered" class="list-decimal font-serif">
      <slot></slot>
    </ol>
    <!-- otherwise use this -->
    <ul v-else :class="bullets ? 'list-disc' : 'list-none'" class="font-serif">
      <slot></slot>
    </ul>
  </div>
</template>
