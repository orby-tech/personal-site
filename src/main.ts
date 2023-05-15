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

const en = {
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
};

const es: typeof en = {
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
      results: "Resultados",
      average_value: "Valor promedio",
      fload_average_value: "Valor promedio flotante",
    },
  },
};

const ru: typeof en = {
  nav: {
    root: "Главная",
    bio: "О себе",
    my_products: "Мои продукты",
    contacts: "Контакты",
    recommendations: "Рекомендации",
  },
  root: {
    cicd: ["Я", "фронтенд-разработчик", "Но я", "делаю CI/CD"],
    docker: ["Мне нравится", "docker", "Но я", "использую виртуальные машины"],
    js: ["Я ненавижу", "JS", "Но я", "пишу код для браузеров"],
    darkTheme: ["Я ненавижу", "темную тему", "Но", "она такая красивая"],
  },
  bio: {
    name: "Меня зовут Тимур Бондаренко",
    yo: "Мне 24 года",
    make: "Я занимаюсь фронтендом, немного бэкенда и большой автоматизацией",
    interested: "Мне нравятся люди, которые интересны",
    cantlive:
      "Я не могу жить без docker, виртуальных машин и моей маленькой жены",
  },
  links: {
    goto: "Перейти по ссылкам",
    copy: "Скопировать адреса",
  },
  footer: {
    joke: "Эта маленькая страница - большая шутка",
    orNot: "Или нет?",
  },
  reaction_metric_tool: {
    start_test: "Начать тест",
    the_lower_the_result_the_better: "Чем ниже результат, тем лучше",
    the_reaction_time_is_related:
      "Время реакции связано с вашим уровнем усталости.",
    the_result_is_how_quickly:
      "Результат показывает, насколько быстро вы реагируете, а быстрое время реакции означает, что вы быстро реагируете.",
    the_faster_your_reaction_time_the_better:
      "Так что, чем быстрее ваше время реакции, тем лучше.",
    last_day: "Последний день",
    last_week: "Последняя неделя",
    last_month: "Последний месяц",
    last_3_months: "Последние 3 месяца",
    all_time: "Все время",
    try: "Попробовать",
    wait_red_and_click: "Ждите красного и кликните!",
    end_try_click: "Клик!",
    graphs: {
      results: "Результаты",
      average_value: "Среднее значение",
      fload_average_value: "Плавающее среднее значение",
    },
  },
};

const kz: typeof en = {
  nav: {
    root: "үй",
    bio: "Мен туралы",
    my_products: "Менің өнімдерім",
    contacts: "Контактілер",
    recommendations: "Ұсыныстар",
  },
  root: {
    cicd: ["Мем", "front-end әзірлеуші", "Бірақ мен", "CI/CD жасаймын"],
    docker: [
      "Маған ұнайды",
      "докер",
      "Бірақ мен",
      "виртуалды машиналарды пайдаланамын",
    ],
    js: ["Мен жек көремін», «JS», «Бірақ мен», «браузерлерге арналған код"],
    darkTheme: [
      "Мен жек көремін",
      "қараңғы тақырып",
      "Бірақ",
      "ол ​​өте әдемі",
    ],
  },
  bio: {
    name: "Менің атым Тимур Бондаренко",
    yo: "Менің жасым 24-те",
    make: "Мен фронтальды, кейбір серверлерді және көптеген автоматтандыруды жасаймын",
    interested: "Маған қызығушылық танытатын адамдар ұнайды",
    cantlive:
      "Мен докерсіз, виртуалды машиналарсыз және кішкентай әйелімсіз өмір сүре алмаймын",
  },
  links: {
    goto: "Сілтемелерге өту",
    copy: "Мекенжайларды көшіру",
  },
  footer: {
    joke: "Бұл кішкентай парақ үлкен әзіл",
    orNot: "Әлде жоқ па?",
  },
  reaction_metric_tool: {
    start_test: "Сынақты бастау",
    the_lower_the_result_the_better:
      "Нәтиже неғұрлым төмен болса, соғұрлым жақсы",
    the_reaction_time_is_related:
      "Реакция уақыты сіздің шаршау деңгейіне байланысты.",
    the_result_is_how_quickly:
      "Нәтиже сіздің қаншалықты жылдам әрекет ететініңізді көрсетеді, ал жылдам реакция уақыты тез әрекет ететініңізді білдіреді",
    the_faster_your_reaction_time_the_better:
      "Сондықтан сіздің реакция уақытыңыз неғұрлым жылдам болса, соғұрлым жақсы.",
    last_day: "соңғы күн",
    last_week: "өткен апта",
    last_month: "өткен айда",
    last_3_months: "Соңғы 3 ай",
    all_time: "Барлық уақытта",
    try: "Көріңіз",
    wait_red_and_click: "Қызылды күтіп, басыңыз!",
    end_try_click: "Басу!",
    graphs: {
      results: "«нәтижелер",
      average_value: "Орташа",
      fload_average_value: "Қалқымалы орташа",
    },
  },
};

const sr: typeof en = {
  nav: {
    root: "Корен",
    bio: "Био",
    my_products: "Моји производи",
    contacts: "Контакти",
    recommendations: "Препоруке",
  },
  root: {
    cicd: ["Ја сам", "програмер фронтенда", "Али ја", "направи ЦИ/ЦД"],
    docker: ["Свиђа ми се", "доцкер", "Али ја", "користим ВМ"],
    js: ["Мрзим", "ЈС", "Али ја", "направи код за прегледаче"],
    darkTheme: ["Мрзим", "мрачна тема", "Али", "тако је слатко"],
  },
  bio: {
    name: "Моје име Тимур Бондеренко",
    yo: "Имам 24 године",
    make: "Ја правим фронтенд, мали бацкенд и велику аутоматизацију",
    interested: "Свиђаш ми се, ако си заинтересован",
    cantlive: "Не могу да живим без Доцкер-а, ВМ-а и моје мале жене",
  },
  links: {
    goto: "Иди на везе",
    copy: "Копирај адресе",
  },
  footer: {
    joke: "Ова мала страница је велика шала",
    orNot: "Или не?",
  },
  reaction_metric_tool: {
    start_test: "Започни тест",
    the_lower_the_result_the_better: "Што је нижи резултат, то боље",
    the_reaction_time_is_related:
      "Време реакције је повезано са вашим нивоом умора.",
    the_result_is_how_quickly:
      "Резултат је колико брзо реагујете, а брзо време реакције значи да брзо реагујете.",
    the_faster_your_reaction_time_the_better:
      "Дакле, што је брже време ваше реакције, то боље.",
    last_day: "Последњи дан",
    last_week: "Прошле недеље",
    last_month: "Прошли месец",
    last_3_months: "Последња 3 месеца",
    all_time: "Све време",
    try: "Покушај",
    wait_red_and_click: "Сачекајте црвено и кликните!",
    end_try_click: "Кликни!",
    graphs: {
      results: "Резултати",
      average_value: "Просечна вредност",
      fload_average_value: "Плутајућа просечна вредност",
    },
  },
};
const messages = {
  en,
  es,
  ru,
  kz,
  sr,
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
