<script setup>
const route = useRoute();
//  Array to Sort
const charList = [
  {
    firstName: "Rey",
    lastName: "Palpatine",
  },
  {
    firstName: "Anakin",
    lastName: "Skywalker",
  },
  {
    firstName: "Ashoka",
    lastName: "Tano",
  },
];

const charFirstNameSort = computed(() => {
  return charList.sort((a, b) =>
    a.firstName !== b.firstName ? (a.firstName < b.firstName ? -1 : 1) : 0
  );
});
const charLastNameSort = computed(() => {
  return charList.sort((a, b) =>
    a.lastName !== b.lastName ? (a.lastName < b.lastName ? -1 : 1) : 0
  );
});
</script>
<template>
  <AppMain>
    <PageHeader title="Gallery" />
    <AppSection>
      <SectionHeader title="Computed Sort" />
      <div class="flex gap-8 mx-auto text-2xl">
        <AppList>
          <AppListItem v-for="name in charFirstNameSort" :key="name.id" class="text-red-500 font-bold">
            {{ name.firstName }} {{ name.lastName }}
          </AppListItem>
        </AppList>
        <AppList>
          <AppListItem v-for="name in charLastNameSort" :key="name.id" class="font-bold">
            {{ name.lastName }} - {{ name.firstName }}
          </AppListItem>
        </AppList>
      </div>
    </AppSection>
  </AppMain>
</template>
