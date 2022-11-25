// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        { name: "title", content: "Sait Nuxt 3 App" },
        {
          name: "description",
          content: "A place to learn and practice using Nuxt 3",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bitter:wght@100&display=swap",
        },
      ],
    },
  },
  modules: ["@nuxtjs/tailwindcss"],
});
