<script setup>
const { data: products } = useFetch("https://fakestoreapi.com/products");
</script>
<template>
  <AppMain>
    <PageHeader title="Products" />
    <div>
      <AppList ordered>
        <AppListItem v-for="product in products" :key="product.id">
          {{ product.title }}</AppListItem
        >
      </AppList>
    </div>
  </AppMain>
</template>
