<script setup>
useHead({
  title: "About Page",
  meta: [
    { name: "description", content: "The about page for our SAIT Nuxt App" },
  ],
});
const kotor = [
  {
    name: "Revan",
    description: "Dark Lord with a sweet mask, turncoat Republic savior.",
  },
  {
    name: "Malek",
    description: "Dark Lord with a gross face, Republic scourge",
  },
  {
    name: "Bastila",
    description:
      "Jedi with a cool double edged lightsaber and amazing Battle Meditation skills.",
  },
];
</script>
<template>
  <AppMain>
    <PageHeader title="About Page" />
    <AppSection>
      <SectionHeader title="List Component" />
    </AppSection>
    <!-- List Examples-->
    <div class="flex space-around gap-4 flex-wrap">
      <section>
        <h3>Unordered List</h3>
        <AppList bullets>
          <AppListItem v-for="jedi in kotor" :key="jedi.id" brand>
            <h4 class="text-xl font-semibold font-sans">{{ jedi.name }}</h4>
            <p class="text-black">{{ jedi.description }}</p>
          </AppListItem>
        </AppList>
      </section>
      <section>
        <h3>Ordeded List</h3>
        <AppList ordered>
          <li>one</li>
          <li>two</li>
          <li>three</li>
        </AppList>
      </section>
    </div>
  </AppMain>
</template>
