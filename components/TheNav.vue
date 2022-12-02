<script setup>
const router = useRouter();

const mainRoutes = computed(() => {
  return router.options.routes.filter(
    (route) => route.path.split("/").length <= 2
  );
});
</script>
<template>
  <nav class="bg-purple-500 text-white justify-center flex text-xl font-bold">
    <ul class="flex space-around gap-4">
      <li v-for="route in mainRoutes" :key="route.id">
        <NuxtLink
          :to="route.path"
          class="block p-4 hover:text-black hover:bg-white"
          >{{ route.name }}</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>
