<template>
  <div class="container">
    <div class="tablecard">
      <div class="boxtitle" :style="{ background: generalStore.background }">
        <span class="title">CADASTRO DE ITEMS</span>
      </div>
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

        <input
          type="text"
          placeholder="Digite a descrição do item."
          class="camp"
          v-model="body.descricao"
        />
      </div>
      <div class="boxbutton">
        <button
          class="button"
          @click="setregister()"
          :style="{ background: generalStore.background }"
        >
          VOLTAR
        </button>
        <button
          class="button"
          @click="generalStore.stepUpdate ? updateItemInTable() : sendBody()"
          :style="{ background: generalStore.background }"
        >
          {{ generalStore.stepUpdate ? "ATUALIZAR" : "CADASTRAR" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { useGeneralStore } from "../../../store/general";
import {
  addItems,
  updateItems,
  getitems,
} from "../../../services/ActivitiesService.js";
const generalStore = useGeneralStore();

const body = reactive({
  nome: "",
  preco: "",
  descricao: "",
});

const setregister = () => {
  generalStore.stepregister = false;
};
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
    await addItems(body);
    await getitems();
    alert("Item registrado com sucesso!");
    body.nome = "";
    body.preco = "";
    body.descricao = "";
  } catch (error) {
    console.error("Erro ao registrar item:", error);
  }
};

const updateItemInTable = async () => {
  try {
    await updateItems(body);
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
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  background: rgba(24, 24, 24, 0.628);
  position: absolute;
  z-index: 99;
  top: 0;
  left: 0;
}

.tablecard {
  width: 340px;
  height: 100%;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  background: white;
  box-shadow: 0 6px 18px rgba(17, 24, 39, 0.06);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.boxtitle {
  width: 100%;
  border-top-left-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
}
.title {
  color: white;
  font-family: sans-serif;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 40px);
  height: 40%;
  padding: 20px;
}

.camp {
  width: 90%;
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
.boxbutton {
  width: calc(100% - 40px);
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.button {
  max-width: 200px;
  width: 44%;
  height: 40px;
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
