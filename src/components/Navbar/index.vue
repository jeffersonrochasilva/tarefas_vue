<template>
  <div class="navbar">
    <div class="one" />
    <div class="one" v-for="item in items">
      <span class="title"> {{ item }} </span>
    </div>
    <div class="box">
      <Tags />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Tags from "../commom/Tegs/index.vue";
import { ref } from "vue";
const items = ref([
  "Casa",
  "Estudo",
  "Trabalho",
  "Saúde",
  "Diverção",
  "Adiconais",
]);
</script>

<style scoped>
.navbar {
  width: 300px;
  height: calc(100% - 40px);
  padding: 20px;
  background: #fff;
}
.one {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
}
.one:hover {
  background: rgb(227, 225, 225);
}
.title {
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 30px;
}
.box {
  width: 100%;
  height: 100px;
  padding: 20px 0;
}
</style>
