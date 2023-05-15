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
      my_products: "My Products",
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
    reaction_metric_tool: {
      start_test: "Start test",
      the_lower_the_result_the_better: "The lower the result, the better",
      the_reaction_time_is_related:
        "The reaction time is related to your level of tiredness.",
      the_result_is_how_quickly:
        "The result is how quickly you react, and a fast reaction time means you react quickly.",
      the_faster_your_reaction_time_the_better:
        "So, the faster your reaction time, the better.",
      last_day: "Last day",
      last_week: "Last week",
      last_month: "Last month",
      last_3_months: "Last 3 months",
      all_time: "All time",
      try: "Try",
      wait_red_and_click: "Wait for red and click!",
      end_try_click: "Click!",
      graphs: {
        results: "Results",
        average_value: "Average value",
        fload_average_value: "Floating average value",
      },
    },
  },
  es: {
    nav: {
      root: "Raís",
      bio: "Biografía",
      my_products: "Mis productos",
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
      cantlive:
        "No puedo vivir sin docker, máquinas virtuales y mi pequeña esposa",
    },
    links: {
      goto: "Ir a los enlaces",
      copy: "Copiar direcciones",
    },
    footer: {
      joke: "Esta pequeña página es una gran broma.",
      orNot: "¿O no?",
    },
    reaction_metric_tool: {
      start_test: "Iniciar prueba",
      the_lower_the_result_the_better: "Cuanto menor sea el resultado, mejor",
      the_reaction_time_is_related:
        "El tiempo de reacción está relacionado con tu nivel de cansancio.",
      the_result_is_how_quickly:
        "El resultado es la rapidez con la que reaccionas, y un tiempo de reacción rápido significa que reaccionas rápidamente.",
      the_faster_your_reaction_time_the_better:
        "Entonces, cuanto más rápido sea tu tiempo de reacción, mejor.",
      last_day: "Último día",
      last_week: "La semana pasada",
      last_month: "Mes pasado",
      last_3_months: "Últimos 3 meses",
      all_time: "Todo el tiempo",
      try: "Intenta",
      wait_red_and_click: "¡Espera al rojo y haz clic!",
      end_try_click: "¡Haz clic!",
      graphs: {
        resultados: "Resultados",
        valor_promedio: "Valor promedio",
        float_average_value: "Valor promedio flotante",
      },
    },
  },
};
const i18n = createI18n({
  locale: window.localStorage.getItem("lang") || "en",
  messages: messages,
});
i18n.install(app);
app.use(createPinia());
app.use(ElementPlus);

app.use(router);

app.mount("#app");
