<template>
  <div class="header">
    <div class="boxTitle">
      <span class="title">Lista de produtos</span>
      <i
        class="fas fa-bars"
        style="color: #fff; cursor: pointer"
        @click="setStoregeneral()"
      ></i>
    </div>
    <div>
      <input class="campfind" placeholder="Nome do item" v-model="itens" />
      <i
        class="fas fa-search"
        style="color: #fff; cursor: pointer"
        @click="itensFiltrados"
      ></i>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { useGeneralStore } from "../../store/general";
const itens = ref("");

const itensFiltrados = () => {
  const termo = itens.value.trim().toLowerCase();

  if (!termo) return itens.value;

  const res = generalStore.dataTable.filter((item) =>
    item.nome.toLowerCase().includes(termo)
  );
  console.log(...res, itens.value, "res");
  generalStore.dataTable = res;
};

const generalStore = useGeneralStore();

const setStoregeneral = () => {
  generalStore.setGeneralStore();
};

const selectItemInTable = () => {};
</script>
<style scoped>
.header {
  width: calc(100% - 140px);
  height: 60px;
  padding: 0 70px;
  background: #2692e6;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.boxTitle {
  width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.title {
  color: #fff;
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}
.campfind {
  margin-right: 30px;
  border-radius: 10px;
  border-style: none;
  color: gray;
  padding: 0 10px;
  font-family: sans-serif;
  height: 25px;
  width: 250px;
  cursor: pointer;
}
</style>
