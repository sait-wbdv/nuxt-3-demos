<script setup>
defineProps({
  title: {
    type: String,
    default: "This is a Card Title",
  },
  description: {
    type: String,
    default:
      "A card contains bound information about a particular topic. This text should help test layout.",
  },
  linkUrl: {
    type: String,
    default: "#",
  },
  linkText: {
    type: String,
    default: "Explore Button Stuff",
  },
  bgColor: {
    type: String,
    default: "bg-slate-200",
  },
  linkColor: {
    type: String,
    default: "bg-slate-500",
  },
  color: {
    type: String,
    default: "text-slate-500",
  },
});
</script>
<template>
  <article
    :class="bgColor"
    class="max-w-sm md:max-w-xs p-4 rounded-md m-4 drop-shadow-xl hover:drop-shadow-none duration-300 ease-in-out px-8"
  >
    <div class="my-4">
      <h3>
        <NuxtLink
          :to="linkUrl"
          :class="color"
          class="text-2xl font-semibold underline underline-offset-2"
          >{{ title }}
        </NuxtLink>
      </h3>
    </div>
    <div>
      <p class="w-5/6 text-slate-800">
        {{ description }}
      </p>
    </div>
    <div>
      <NuxtLink
        :to="linkUrl"
        :class="linkColor"
        class="block text-white text-center rounded-md mx-auto py-4 font-semibold text-xl my-6"
        >{{ linkText }}</NuxtLink
      >
    </div>
  </article>
</template>
