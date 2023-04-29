import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LinkView from "../views/LinksView.vue";
import BioView from "../views/BioView.vue";
import RecommendationsView from "../views/RecommendationsView.vue";
import TextToWordsParser from "../views/TextToWordsParser.vue";
import ReactionMetricsTool from "../views/ReactionMetricsTool.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/bio",
      name: "bio",
      component: BioView,
    },
    {
      path: "/links",
      name: "links",
      component: LinkView,
    },
    {
      path: "/recommendations",
      name: "recommendations",
      component: RecommendationsView,
    },
    {
      path: "/text-to-words-parser",
      name: "text-to-words-parser",
      component: TextToWordsParser,
    },
    {
      path: "/reaction-metrics-tool",
      name: "reaction-metrics-tool",
      component: ReactionMetricsTool,
    },
  ],
});

export default router;