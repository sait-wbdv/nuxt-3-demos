<script setup>
const cards = [
  {
    info: {
      title: "Accessible Front-end Components",
      description:
        "Reliable accessible UI components: :focus styles, modals, date pickers, navigation, tables, buttons, SVGs.",
    },
    link: {
      url: "https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/",
      text: "Explore Accessible Components",
    },
    colors: {
      bgDark: "bg-green-600",
      bgLight: "bg-green-100",
      textDark: "text-green-600",
    },
  },
  {
    info: {
      title: "Accessible Front-end Components",
      description:
        "Reliable accessible UI components: :focus styles, modals, date pickers, navigation, tables, buttons, SVGs.",
    },
    link: {
      url: "https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/",
      text: "Explore Accessible Components",
    },
    colors: {
      bgDark: "bg-orange-600",
      bgLight: "bg-orange-100",
      textDark: "text-orange-600",
    },
  },
  {
    info: {
      title: "Accessible Front-end Components",
      description:
        "Reliable accessible UI components: :focus styles, modals, date pickers, navigation, tables, buttons, SVGs.",
    },
    link: {
      url: "https://www.smashingmagazine.com/2021/03/complete-guide-accessible-front-end-components/",
      text: "Explore Accessible Components",
    },
    colors: {
      bgDark: "bg-purple-600",
      bgLight: "bg-purple-100",
      textDark: "text-purple-600",
    },
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
          :info="card.info"
          :link="card.link"
          :colors="card.colors"
        />
      </CardGrid>
    </AppSection>
  </AppMain>
</template>
