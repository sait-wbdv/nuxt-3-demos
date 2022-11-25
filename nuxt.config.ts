// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "SAIT Nuxt App",
      meta: [
        {
          name: "description",
          content: "Learning Web Development with Nuxt",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
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
