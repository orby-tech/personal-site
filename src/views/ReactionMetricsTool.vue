<script setup lang="ts">
import { ref } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  TimeScale, registerables
} from "chart.js";
import { Line, Chart } from "vue-chartjs";
import "chartjs-adapter-moment";
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  PointElement,
  Legend,
  TimeScale,
  ...registerables
);

type State = "RESULTS" | "TRY" | "WAIT_RED" | "WAIT_GREEN";

let state = ref<State>("RESULTS");
let countRetries = ref(0);

const testResults = ref<number[]>([]);
let lastRedStartTime: number | null = null;

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const previosValues = JSON.parse(
  localStorage.getItem("reaction-results") || "{}"
);

const averageValue =
  Object.values(previosValues).reduce((p, c) => p + c, 0) /
  Object.values(previosValues).length;

const data = {
  labels: Object.keys(previosValues).map((k) =>
    new Date(+k).toLocaleDateString()
  ),
  datasets: [
    {
      label: "results",
      data: Object.keys(previosValues).map((k) => ({
        x: new Date(+k),
        y: previosValues[k],
      })),
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
    {
      label: "averageValue",
      data: Object.keys(previosValues).map((k) => ({
        x: new Date(+k),
        y: averageValue,
      })),
      fill: false,
      borderColor: "yellow",
      tension: 0.1,
    },
  ],
};
const options = {
  responsive: true,
  scales: {
    x: {
      type: "time",
      time: {},
      min: new Date(Math.min(...Object.keys(previosValues).map((x) => +x))),
    },
  },
};

const countResults = () => {
  const clearedValues = testResults.value.sort().slice(1, -1);
  const averageValue =
    clearedValues.reduce((p, c) => p + c, 0) / clearedValues.length;

  const previosValues = JSON.parse(
    localStorage.getItem("reaction-results") || "{}"
  );
  previosValues[new Date().getTime()] = averageValue;
  localStorage.setItem("reaction-results", JSON.stringify(previosValues));

  testResults.value = [];
  window.location.reload();
};

const startTest = () => {
  console.log(8);
  state.value = "TRY";
  countRetries.value = 0;
  console.log(state);
};

const startTry = () => {
  countRetries.value += 1;
  state.value = "WAIT_GREEN";

  setTimeout(() => {
    state.value = "WAIT_RED";
    lastRedStartTime = new Date().getTime();
  }, getRandomInt(600, 1200));
};

const endTry = () => {
  if (!lastRedStartTime) {
    return;
  }

  testResults.value = [
    ...testResults.value,
    new Date().getTime() - lastRedStartTime,
  ];

  if (countRetries.value < 5) {
    state.value = "TRY";
  } else {
    state.value = "RESULTS";
    countResults();
  }

};
</script>

<template>
  <main>
    <div v-if="state == 'RESULTS'" class="results-container">
      <div>Results block</div>
      <Chart :type="'line'" :data="data" :options="options" />

      <el-button @click="() => startTest()">Start Test</el-button>
    </div>
    <div v-if="state === 'TRY'" class="try-container">
      Try: {{ countRetries }} / 5

      <el-button @click="() => startTry()">Start Test</el-button>
    </div>
    <div v-if="state === 'WAIT_GREEN'" class="wait-green-container">
      Wait red and click
    </div>
    <div
      v-if="state === 'WAIT_RED'"
      class="wait-red-container"
      @click="() => endTry()"
    >
      Click!
    </div>
  </main>
</template>

<style scoped>
main {
  flex: auto;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 50px;
}

.results-container {
  width: 100%;
}

.try-container {
  width: 300px;
  height: 300px;
  background-color: aqua;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wait-green-container {
  width: 300px;
  height: 300px;
  background-color: green;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.wait-red-container {
  width: 300px;
  height: 300px;
  background-color: red;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
