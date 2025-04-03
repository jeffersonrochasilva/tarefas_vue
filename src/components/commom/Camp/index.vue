<template>
  <div class="container">
    <input
      type="text"
      placeholder="Digite aqui sua atividade."
      class="camp"
      v-model="data"
      @keydown.enter="pustTarefa"
    />
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { useGeneralStore } from "../../../store/general";
const generalStore = useGeneralStore();
const data = ref("");
const pustTarefa = async () => {
  const obj = {
    id: Math.floor(Math.random() * (100 - 1 + 1)) + 1,
    item: data.value,
    categoria: "teste",
  };
  try {
    console.log("obj", obj);
    axios.post("http://localhost:3000/tarefas", obj);
    data.value = "";
    generalStore.getItemsInJson();
    alert("registrado com sucesso");
  } catch (error) {
    console.log(error);
  }
};
</script>
<style scoped>
.container {
  width: 500px;
}

.camp {
  width: 100%;
  height: 40px;
  background: gray;
  padding-left: 20px;
  border-radius: 4px;
  border: none;
  background: #fff;
}
</style>
