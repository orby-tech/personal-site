<script setup lang="ts">
const myProducts = [
  {
    title: "Reaction Metrics Tool",
    description: "A tool to measure reaction time to detect cognitive decline",
    link: "/reaction-metrics-tool",
  },
  {
    title: "Balances App",
    description:
      "A powerful tool designed to efficiently manage balances, transactions, and multiple currencies. With this software, you can easily keep track of your financial activities and ensure that you always have an accurate overview of your finances.",
    link: "http://balances-app.orby-tech.space",
  },
  {
    title: "Brainbuster Map",
    description:
      "Graphical representation of the scince topics, their relations to each other and test questions for each topic",
    link: "http://brainbuster.orby-tech.space",
  },
  {
    title: "Currencies Service",
    description: "Service to get currencies information from different sources",
    link: "http://currencies.orby-tech.space",
  },
];
</script>

<template>
  <main>
    <ul lang="es">
      <li v-for="recomendation in myProducts" :key="recomendation.link">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>
                <a v-bind:href="recomendation.link">
                  {{ recomendation.title }}
                </a>
              </span>
            </div>
          </template>
          {{ recomendation.description }}
        </el-card>
      </li>
    </ul>
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
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;
  height: 100%;
  overflow-x: hidden;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;

  gap: 20px;
  overflow-x: scroll;
}

li {
  max-width: 300px;
  height: auto;
}
</style>
