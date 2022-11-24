<script setup>
const cards = [
  {
    title: "Accessible Front-end Components",
    description:
      "Reliable accessible UI components: :focus styles, modals, date pickers, navigation, tables, buttons, SVGs.",
    linkUrl:
      "https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/",
    linkText: "Explore Accessible Components",
    bgColor: "bg-green-100",
    linkColor: "bg-green-600",
    color: "text-green-600",
  },
];
</script>
<template>
  <main class="mx-auto">
    <header
      class="container flex justify-center text-5xl font-bold my-8 text-center"
    >
      <h1>Home Page</h1>
    </header>
    <section class="container">
      <header class="text-3xl text-center py-4 font-semibold">
        <h2>Card Layout</h2>
      </header>
      <div>
        <AppCard
          v-for="card in cards"
          :key="card.id"
          :title="card.title"
          :description="card.description"
          :linkUrl="card.linkUrl"
          :linkText="card.linkText"
          :bgColor="card.bgColor"
          :color="card.color"
          :linkColor="card.linkColor"
        />
      </div>
    </section>
  </main>
</template>
