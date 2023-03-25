import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "element-plus/theme-chalk/dark/css-vars.css";
import "./assets/main.css";

import { createI18n } from "vue3-i18n";

const app = createApp(App);

const messages = {
  en: {
    nav: {
      root: "Root",
      bio: "Bio",
      contacts: "Contacts",
      recommendations: "Recommendations",
    },
    root: {
      cicd: ["I'm a", "frontend developer", "But I", "make CI/CD"],
      docker: ["I like", "docker", "But I", "use VMs"],
      js: ["I hate", "JS", "But I", "make code for browsers"],
      darkTheme: ["I hate", "dark theme", "But", "it's so cute"],
    },
    bio: {
      name: "My name Timur Bonderenko",
      yo: "I am 24 yo",
      make: "I make frontend, a little backend and the big automatization",
      interested: "I like you, if you are interested",
      cantlive: "I can't live without docker, VMs and my little wife",
    },
    links: {
      goto: "Go to the links",
      copy: "Copy addresses",
    },
    footer: {
      joke: "This little page is big joke",
      orNot: "Or not?",
    },
  },
  es: {
    nav: {
      root: "Raís",
      bio: "Biografía",
      contacts: "Contactos",
      recommendations: "Recomendaciones",
    },
    root: {
      cicd: ["Soy un", "desarrollador frontend", "pero", "hago CI/CD"],
      docker: ["Me gusta", "docker", "pero", "uso máquinas virtuales"],
      js: ["Odio", "JS", "pero", "hago código para navegadores"],
      darkTheme: ["Odio el", "tema oscuro", "pero", "es tan lindo"],
    },
    bio: {
      name: "Mi nombre Timur Bonderenko",
      yo: "Tengo 24 años",
      make: "Hago frontend, un poco de backend y la gran automatización",
      interested: "Me gustas si te interesa",
      cantlive: "No puedo vivir sin docker, máquinas virtuales y mi pequeña esposa",
    },
    links: {
      goto: "Ir a los enlaces",
      copy: "Copiar direcciones",
    },
    footer: {
      joke: "Esta pequeña página es una gran broma.",
      orNot: "¿O no?",
    },
  },
};
const i18n = createI18n({
  locale: window.localStorage.getItem("lang") || "en",
  messages: messages,
});
i18n.install(app);
console.log(app)
app.use(createPinia());
app.use(ElementPlus);

app.use(router);

app.mount("#app");
