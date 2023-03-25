<script setup lang="ts"></script>

<template>
  <main>
    <span> {{ $t("bio.name") }} </span>
    <span> {{ $t("bio.yo") }} </span>
    <span> {{ $t("bio.make") }} </span>
    <span> {{ $t("bio.interested") }} </span>
    <span> {{ $t("bio.cantlive") }} </span>
  </main>
</template>

<style scoped>
main {
  flex: auto;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-left: 50px;
}
</style>
