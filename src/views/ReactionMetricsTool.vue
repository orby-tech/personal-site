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
  TimeScale,
  registerables,
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
type Range =
  | "last day"
  | "last week"
  | "last month"
  | "last 3 month"
  | "all time";

const Range = {
  lastDay: "last day" as Range,
  lastWeek: "last week" as Range,
  lastMonth: "last month" as Range,
  last3Month: "last 3 month" as Range,
  allTime: "all time" as Range,
};

let state = ref<State>("RESULTS");
let countRetries = ref(0);

const testResults = ref<number[]>([]);
const settedRange = ref<Range>(Range.lastDay);
let lastRedStartTime: number | null = null;

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

const previosValues = JSON.parse(
  localStorage.getItem("reaction-results") || "{}"
);

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
  state.value = "RESULTS";
  previosValues.value = { ...previosValues.value };
  // window.location.reload();
};

const startTest = () => {
  state.value = "TRY";
  countRetries.value = 0;
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

const getAverage = (values: number[]): number =>
  values.reduce((p, c) => p + c, 0) / values.length;

const getMinByRange = (range: Range) => {
  const now = Date.now() - 1000 * 60 * 60 * 2;
  let min = new Date(now - 1000 * 60 * 60 * 24);
  if (range === Range.lastDay) {
    min = new Date(now - 1000 * 60 * 60 * 24);
  } else if (range === Range.lastWeek) {
    min = new Date(now - 1000 * 60 * 60 * 24 * 7);
  } else if (range === Range.lastMonth) {
    min = new Date(now - 1000 * 60 * 60 * 24 * 30);
  } else if (range === Range.last3Month) {
    min = new Date(now - 1000 * 60 * 60 * 24 * 90);
  } else if (range === Range.allTime) {
    min = new Date(Math.min(...Object.keys(previosValues).map((x) => +x)));
  }

  return min;
};

const filterValuesByRange = (
  values: Record<number, number>,
  range: Range
): Record<number, number> => {
  const min = getMinByRange(range);
  const newValues = {} as Record<number, number>;
  Object.keys(values).forEach((k) => {
    if (+k < min.getTime()) {
      return;
    }
    newValues[+k] = values[+k];
  });

  return newValues;
};

const getDataByRange = (range: Range, _values: Record<number, number>) => {
  const values = filterValuesByRange(_values, range);

  const averageValue = getAverage(Object.values(values));

  const data = {
    labels: Object.keys(values).map((k) => new Date(+k).toLocaleDateString()),
    datasets: [
      ...(![Range.allTime, Range.last3Month].includes(range)
        ? [
            {
              label: "results",
              data: Object.keys(values).map((k) => ({
                x: new Date(+k),
                y: values[+k],
              })),
              fill: false,
              borderColor: "rgb(75, 192, 192)",
              tension: 0.1,
            },
          ]
        : []),
      {
        label: "averageValue",
        data: Object.keys(values).map((k) => ({
          x: new Date(+k),
          y: averageValue,
        })),
        fill: false,
        borderColor: "yellow",
        tension: 0.1,
      },
      {
        label: "averageValue",
        data: Object.keys(values).map((k, i) => {
          const slice = Object.values(values).slice(
            i,
            i + 10 > Object.values(values).length - 1
              ? Object.values(values).length - 1
              : i + 10
          );
          const averageValue = getAverage(slice);
          return {
            x: new Date(+k),
            y: averageValue,
          };
        }),
        fill: false,
        borderColor: "green",
        tension: 0.1,
      },
    ],
  };
  return data;
};

const getOptionsByRange = (range: Range) => {
  const min = getMinByRange(range);
  return {
    responsive: true,
    scales: {
      x: {
        type: "time",
        time: {},
        min,
        max: Date.now() + 1000 * 60 * 60 * 2,
      },
    },
  };
};
</script>

<template>
  <main>
    <div v-if="state == 'RESULTS'" class="results-container">
      <el-button @click="() => startTest()" class="start-button"
        >Start Test</el-button
      >
      <h3>The lower the result, the better.</h3>
      <el-select v-model="settedRange">
        <el-option :value="Range.lastDay"> last day</el-option>
        <el-option :value="Range.lastWeek"> last week</el-option>
        <el-option :value="Range.lastMonth"> last month</el-option>
        <el-option :value="Range.last3Month"> last 3 month</el-option>
        <el-option :value="Range.allTime">all time</el-option>
      </el-select>
      <div class="chart-container">
        <Chart
          :type="'line'"
          :data="getDataByRange(settedRange, previosValues)"
          :options="getOptionsByRange(settedRange)"
        />
      </div>
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
  padding: 50px;
}

.results-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
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

.start-button {
  padding: 40px;
}

.chart-container {
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
