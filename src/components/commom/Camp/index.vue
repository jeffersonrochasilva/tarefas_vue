<template>
  <div class="container">
    <div class="tablecard">
      <div class="box">
        <input
          type="text"
          placeholder="Digite o nome do item."
          class="camp"
          v-model="body.nome"
        />
        <input
          type="number"
          placeholder="Digite o preço do item."
          class="camp"
          v-model.number="body.preco"
        />
      </div>

      <div class="box">
        <input
          type="text"
          placeholder="Digite a descrição do item."
          class="camp"
          v-model="body.descricao"
        />
        <button
          class="button"
          @click="generalStore.stepUpdate ? updateItemInTable() : sendBody()"
        >
          {{ generalStore.stepUpdate ? "ATUALIZAR" : "CADASTRAR" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { onMounted, reactive } from "vue";
import { useGeneralStore } from "../../../store/general";

const generalStore = useGeneralStore();

const body = reactive({
  nome: "",
  preco: "",
  descricao: "",
});

onMounted(() => {
  if (generalStore.dataUpdate) {
    Object.assign(body, generalStore.dataUpdate);
    console.log("body carregado:", body);
  }
});

const sendBody = async () => {
  if (!body.nome || !body.preco || !body.descricao) {
    alert("Preencha todos os campos antes de cadastrar!");
    return;
  }

  try {
    console.log("Enviando objeto:", body);
    await axios.post("http://localhost:8081/cadastro", body);
    alert("Item registrado com sucesso!");
    body.nome = "";
    body.preco = "";
    body.descricao = "";
  } catch (error) {
    console.error("Erro ao registrar item:", error);
    alert("Ocorreu um erro ao cadastrar o item.");
  }
};

const updateItemInTable = async () => {
  try {
    await axios.patch(`http://localhost:8081/atualizar/${body.id}`, body);
    alert("Item atualizado com sucesso!");
    body.nome = "";
    body.preco = "";
    body.descricao = "";
    generalStore.stepUpdate = false;
    generalStore.stepTable = 2;
    generalStore.dataUpdate = {};
  } catch (error) {
    console.error("Erro ao atualizar item:", error);
  }
};
</script>

<style scoped>
.container {
  width: 90%;
  height: 80%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.tablecard {
  width: 100%;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(17, 24, 39, 0.06);
}

.box {
  display: flex;
  justify-content: space-between;
  width: calc(100% - 20px);
  height: 60px;
  padding: 10px;
}

.camp {
  width: 40%;
  height: 40px;
  padding-left: 20px;
  outline: none;
  border-radius: 6px;
  background: #fff;
  transition: border-color 0.2s;
  border: 1px solid #ccc;
}

.camp:focus {
  border-color: #2692e6;
  box-shadow: 0 0 3px rgba(38, 146, 230, 0.3);
}

.button {
  max-width: 200px;
  width: 44%;
  height: 40px;
  background: #2692e6;
  border: none;
  color: white;
  border-radius: 6px;
  transition: background 0.2s;
}

.button:hover {
  background: #1e7fcf;
  cursor: pointer;
}
</style>
