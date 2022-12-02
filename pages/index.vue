<script setup>
const route = useRoute();
const { data } = await useAsyncData(() => queryContent("home").findOne());
</script>

<template>
  <AppMain>
    <PageHeader :title="data.title" />
    <AppSection>
      <SectionHeader title="Route Parameters" />
    </AppSection>
    <AppSection>
      <SectionHeader title="Card Layout" />
      <CardGrid>
        <AppCard
          v-for="card in data.cards"
          :key="card.id"
          :info="card.info"
          :link="card.link"
          :colors="card.colors"
        />
      </CardGrid>
    </AppSection>
    <AppSection>
      <SectionHeader title="Corgi Adventure" />
    </AppSection>

    <pre>{{ data }}</pre>
  </AppMain>
</template>
