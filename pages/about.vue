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

const refMsg = ref("");
const msg = "Whats up World";
const showMsg = ref(false);
const msgToggle = () => (showMsg.value = !showMsg.value);
</script>
<template>
  <AppMain>
    <PageHeader title="About Page" />
    <AppSection>
      <SectionHeader title="Reactive Variables" />
      <div>
        <div>
          <h3>RefMsg Input</h3>
          <input
            v-model="refMsg"
            class="my-8 border border-spacing-2 border-black block font-serif"
          />
        </div>
        <div>
          <h3>Msg Input</h3>
          <input
            v-model="msg"
            class="my-8 border border-spacing-2 border-black block font-serif"
          />
        </div>
        <p class="font-serif text-red-800 font-bold">{{ refMsg }}</p>
        <div class="p-4 my-8 bg-slate-100" v-show="showMsg">
          <h4>Hide this message</h4>
          <p class="font-serif text-blue-800 font-bold">{{ msg }}</p>
        </div>
      </div>
      <article class="my-8">
        <h3>Event Handler and Ref</h3>
        <button @click.prevent="msgToggle" class="bg-blue-200 px-4 py-2">
          Hide / Show
        </button>
        <p class="text-2xl">{{ showMsg }}</p>
      </article>
    </AppSection>
    <AppSection>
      <SectionHeader title="List Component" />
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
    </AppSection>
  </AppMain>
</template>
