<script setup lang="ts"></script>

<template>
  <main>
    <div class="table">
      <el-row>
        <el-col :span="4">{{ $t("root.cicd[0]") }} </el-col>
        <el-col :span="8"> {{ $t("root.cicd[1]") }} </el-col>
        <el-col :span="4"> {{ $t("root.cicd[2]") }} </el-col>
        <el-col :span="8"> {{ $t("root.cicd[3]") }} </el-col>
      </el-row>

      <el-row>
        <el-col :span="4">{{ $t("root.docker[0]") }} </el-col>
        <el-col :span="8"> {{ $t("root.docker[1]") }} </el-col>
        <el-col :span="4"> {{ $t("root.docker[2]") }} </el-col>
        <el-col :span="8"> {{ $t("root.docker[3]") }} </el-col>
      </el-row>

      <el-row>
        <el-col :span="4">{{ $t("root.js[0]") }} </el-col>
        <el-col :span="8"> {{ $t("root.js[1]") }} </el-col>
        <el-col :span="4"> {{ $t("root.js[2]") }} </el-col>
        <el-col :span="8"> {{ $t("root.js[3]") }} </el-col>
      </el-row>

      <el-row>
        <el-col :span="4">{{ $t("root.darkTheme[0]") }} </el-col>
        <el-col :span="8"> {{ $t("root.darkTheme[1]") }} </el-col>
        <el-col :span="4"> {{ $t("root.darkTheme[2]") }} </el-col>
        <el-col :span="8"> {{ $t("root.darkTheme[3]") }} </el-col>
      </el-row>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  align-items: center;
  justify-content: center;
}
.table {
  display: flex;
  flex-direction: column;
  padding: 15px;
  max-width: 600px;
}

.el-row {
  justify-content: center;
}

.el-row:last-child {
  margin-bottom: 0;
}

.el-col {
  display: flex;
  border-radius: 4px;
  padding: 5px;
}

.el-col:nth-child(1),
.el-col:nth-child(3) {
  color: gray;
}

.grid-content {
  border-radius: 4px;
}
</style>
