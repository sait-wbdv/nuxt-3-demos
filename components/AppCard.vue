<script setup>
defineProps({
  info: {
    type: Object,
    default() {
      return {
        title: "This is a Card Title",
        description:
          "A card contains bound information about a particular topic. This text should help test layout.",
      };
    },
  },
  link: {
    type: Object,
    default() {
      return {
        url: "#",
        text: "Explore Button Stuff",
      };
    },
  },
  colors: {
    type: Object,
    default() {
      return {
        bgLight: "bg-slate-200",
        bgDark: "bg-slate-500",
        textDark: "text-slate-500",
      };
    },
  },
});
</script>
<template>
  <article
    :class="colors.bgLight"
    class="max-w-sm md:max-w-xs p-4 rounded-md m-4 drop-shadow-xl hover:drop-shadow-none duration-300 ease-in-out px-8"
  >
    <div class="my-4">
      <h3>
        <NuxtLink
          target="_blank"
          :to="link.url"
          :class="colors.textDark"
          class="text-2xl font-semibold underline underline-offset-2"
          >{{ info.title }}
        </NuxtLink>
      </h3>
    </div>
    <div>
      <p class="w-5/6 text-slate-800">
        {{ info.description }}
      </p>
    </div>
    <div>
      <NuxtLink
        target="_blank"
        :to="link.url"
        :class="colors.bgDark"
        class="block text-white text-center rounded-md mx-auto py-4 font-semibold text-xl my-6"
        >{{ link.text }}</NuxtLink
      >
    </div>
  </article>
</template>
