<script setup lang="ts">
import { ref } from "vue";
import { RouterView } from "vue-router";
import Icon from "./components/menu/Icon.vue";
import { ArrowDown } from "@element-plus/icons-vue";
import { useRouter, useRoute } from "vue-router";

import { useI18n } from "vue3-i18n";
import mobile from "is-mobile";

const route = useRoute();
const router = useRouter();

const namedLink = ref(route.path);

const i18n = useI18n();
const setLocale = (lang: string) => {
  window.localStorage.setItem("lang", lang);
  i18n.setLocale(lang);
};

const locale = ref(i18n.getLocale());

const setLink = (e: any) => {
  router.push(e);
};

i18n.t;
</script>

<template>
  <div class="container">
    <header>
      <div class="wrapper">
        <nav>
          <Icon></Icon>
          <div>
            <div v-if="mobile()">
              <el-select class="menu" v-model="namedLink" @change="setLink">
                <el-option value="/" :label="i18n.t('nav.root')"> </el-option>
                <el-option value="/bio" :label="i18n.t('nav.bio')"> </el-option>
                <el-option
                  value="/my-products"
                  :label="i18n.t('nav.my_products')"
                >
                </el-option>
                <el-option value="/links" :label="i18n.t('nav.contacts')">
                </el-option>
                <el-option
                  value="/recommendations"
                  :label="i18n.t('nav.recommendations')"
                >
                </el-option>
              </el-select>
            </div>
            <div v-else class="desktop-links">
              <el-link href="/" type="success">{{
                i18n.t("nav.root")
              }}</el-link>
              <el-link href="/bio" type="success">
                {{ i18n.t("nav.bio") }}
              </el-link>
              <el-link href="/my-products" type="success">
                {{ i18n.t("nav.my_products") }}
              </el-link>
              <el-link href="/links" type="success">
                {{ i18n.t("nav.contacts") }}
              </el-link>
              <el-link href="/recommendations" type="success">
                {{ i18n.t("nav.recommendations") }}
              </el-link>
            </div>
            <el-select
              v-model="locale"
              @change="setLocale"
              class="lang-selections"
            >
              <el-option value="en">en</el-option>
              <el-option value="es">es</el-option>
            </el-select>
          </div>
        </nav>
      </div>
    </header>

    <RouterView />
    <footer>
      <span>{{ $t("footer.joke") }} </span>
      <span class="grey"> {{ $t("footer.orNot") }} </span>
    </footer>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
nav,
nav > div {
  display: flex;
  gap: 20px;
  padding-left: 20px;
  align-items: center;
}

@media (max-width: 450px) {
  nav {
    flex-direction: column;
  }
}
.desktop-links {
  display: flex;
  gap: 15px;
}

.lang-selections {
  width: 100px;
}

menu > * {
  display: flex;
  justify-content: center;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-success);
  display: flex;
  align-items: center;
}

/* .el-select {
  width: 65px;
  position: absolute;
  right: 15px;
} */
header {
  padding-top: 25px;
  flex: 150px;
}

footer {
  flex: 150px;
  padding-bottom: 25px;

  width: 100%;
  /* bottom: 0px; */
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  opacity: 0.5;
}

.grey {
  color: gray;
}
</style>
