<script setup lang="ts">
import { ref } from "vue";
const text = ref("");
const pairs = ref("");
const skipwords = ref("");
const mergeResult = ref("");
const allwords = ref<[string, number][]>([]);
const newwords = ref<string[]>([]);
const newWordsString = ref<string>("");

const newwordsWithCounts = ref<[string, number][]>([]);

const parse = () => {
  if (!text.value) {
    return;
  }

  const usedWords = skipwords.value
    .replaceAll(/[^a-zA-Z]+/g, " ")
    .toLowerCase()
    .split(" ")
    .filter((x) => x);

  const allWords = text.value
    .replaceAll(/[^a-zA-Z]+/g, " ")
    .toLowerCase()
    .split(" ")
    .filter((x) => x)


  const allWordsSet = new Set(allWords);

  const wordsCounts: [string, number][] = [];

  [...allWordsSet].forEach((w) => {
    wordsCounts.push([w, allWords.filter((x) => x === w).length]);
  });
  const sortedWords = wordsCounts.sort((a, b) => b[1] - a[1]);

  const newWords = sortedWords.filter((x) => !usedWords.includes(x[0]));

  newwords.value = newWords.map((x) => x[0]);

  newWordsString.value = newwords.value.join("\n");
  newwordsWithCounts.value = newWords;
  allwords.value = sortedWords;
};

const copy = () => {
  navigator.clipboard.writeText(newWordsString.value);
};

const paste = async () => {
  pairs.value = await navigator.clipboard.readText();
};

const merge = () => {
  const first = newWordsString.value.split("\n");
  const second = pairs.value.split("\n");
  if (!first.length || !second.length || first.length !== second.length) {
    throw "Incorrect fields";
  }

  const pairsStrings: string[] = [];

  for (let i = 0; i < first.length; i++) {
    pairsStrings.push(`${first[i].trim()};${second[i].trim()}`);
  }

  mergeResult.value = pairsStrings.join("\n");
};
</script>

<template>
  <main>
    <h2>Parser</h2>
    <div>
      <div>
        <el-input
          v-model="text"
          :rows="10"
          type="textarea"
          placeholder="Please input full text"
        />
      </div>
      <div>
        <el-input
          v-model="skipwords"
          :rows="10"
          type="textarea"
          placeholder="Please input skip words"
        />
      </div>
    </div>
    <el-button @click="parse"> Parse </el-button>
    <div>
      <table>
        <tr>
          <th>All words</th>
          <th>Count</th>
        </tr>
        <tr v-for="word in allwords" :key="word[0]">
          <td>{{ word[0] }}</td>
          <td>{{ word[1] }}</td>
        </tr>
      </table>

      <table>
        <tr>
          <th>New words</th>
          <th>Count</th>
        </tr>
        <tr v-for="word in newwordsWithCounts" :key="word[0]">
          <td>{{ word[0] }}</td>
          <td>{{ word[1] }}</td>
        </tr>
      </table>
    </div>

    <h2>Merger</h2>
    <div>
      <div>
        <el-button @click="copy">Copy</el-button>

        <el-input
          v-model="newWordsString"
          :rows="10"
          type="textarea"
          placeholder="Please input words"
        />
      </div>
      <div>
        <el-button @click="paste"> Paste </el-button>
        <el-input
          v-model="pairs"
          :rows="10"
          type="textarea"
          placeholder="Please input words pairs"
        />
      </div>
    </div>
    <el-button @click="merge">Merge</el-button>
    <pre>{{ mergeResult }}</pre>
  </main>
</template>

<style scoped>
main {
  /* min-height: 100vh; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  overflow-y: auto;
}
main > div {
  display: flex;
  flex-direction: row;
}

table > tr {
  vertical-align: top;
}
</style>
