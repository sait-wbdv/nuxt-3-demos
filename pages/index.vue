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
  {
    title: "Accessible Front-end Components",
    description:
      "Reliable accessible UI components: :focus styles, modals, date pickers, navigation, tables, buttons, SVGs.",
    linkUrl:
      "https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/",
    linkText: "Explore Accessible Components",
    bgColor: "bg-orange-100",
    linkColor: "bg-orange-600",
    color: "text-orange-600",
  },
  {
    title: "Accessible Front-end Components",
    description:
      "Reliable accessible UI components: :focus styles, modals, date pickers, navigation, tables, buttons, SVGs.",
    linkUrl:
      "https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/",
    linkText: "Explore Accessible Components",
    bgColor: "bg-purple-100",
    linkColor: "bg-purple-600",
    color: "text-purple-600",
  },
];
</script>
<template>
  <AppMain>
    <PageHeader title="HomePage" />
    <AppSection>
      <SectionHeader title="Card Layout" />
      <CardGrid>
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
      </CardGrid>
    </AppSection>
  </AppMain>
</template>
