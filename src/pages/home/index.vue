<template>
  <div class="home">
    <div class="container">
      <span class="title">Meu quadro de Usuário</span>
      <!-- <button @click="getItemsInMyBackEnd">buscar items no back-end</button> -->
      <FormUser :items="items.campos" />
    </div>
  </div>
</template>
<script setup>
import FormUser from "../../componentes/ui/FormUser/index.vue";
import axios from "axios";
import { ref, onMounted } from "vue";

const items = ref([]);

onMounted(() => {
  const getItemsInMyBackEnd = async () => {
    try {
      const response = await axios.get("http://localhost:3000/form");
      console.log(response.data);
      items.value = response.data;
    } catch (error) {
      console.error("Erro ao buscar itens:", error);
    }
  };
  getItemsInMyBackEnd();
});
</script>

<style scoped>
.home {
  background: #303030;
  width: calc(100% - 80px);
  height: calc(100vh - 80px);
  padding: 40px;
}
.home .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* background: red; */
  gap: 20px;
}
.home .container .title {
  font-size: 50px;
  font-weight: 700;
  color: #fff;
  font-family: "Inter", sans-serif;
}
</style>
