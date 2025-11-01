<template>
  <div class="container">
    <span v-if="generalStore.stepTable === 1" class="title">Cadastro</span>
    <span v-else-if="generalStore.stepTable === 2" class="title"
      >Tabela de produtos</span
    >
  </div>
</template>

<script lang="ts" setup>
import { useGeneralStore } from "../../../store/general";
const generalStore = useGeneralStore();
</script>

<style scoped>
.container {
  top: 60px;
  width: 200px;
  height: 100px;
  display: flex;
  align-items: center;
}
.title {
  font-family: sans-serif;
  font-size: 23px;
  color: gray;
}
</style>
