<template>
  <div class="table-wrapper">
    <div class="table-card">
      <table class="responsive-table">
        <thead :style="{ background: generalStore.background }">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Valor</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in dataTable" :key="item.id">
            <td class="cell-id">{{ item.id }}</td>
            <td class="cell-name">{{ item.nome }}</td>
            <td class="cell-desc">{{ item.descricao }}</td>
            <td class="cell-preco">{{ formatCurrency(item.preco) }}</td>
            <td class="cell-valor">
              <i
                class="fas fa-trash icon-delete"
                @click="deleteItemInTable(item)"
              ></i>
              <i
                class="fas fa-edit icon-edit"
                @click="getItemInTable(item)"
              ></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useGeneralStore } from "../../store/general";
import { getitems, deleteItem } from "../../services/ActivitiesService.js";
import axios from "axios";
const generalStore = useGeneralStore();

const dataTable = computed(() => generalStore.dataTable);

const deleteItemInTable = async (item) => {
  try {
    await deleteItem(item.id);
    await getItem();
  } catch (error) {
    console.error("Erro ao excluir item:", error);
  }
};

const formatCurrency = (value) => {
  if (!value) return "-";
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
const getItemInTable = (item) => {
  generalStore.setDataUpdate(item);
  generalStore.stepUpdate = true;
  generalStore.stepTable = 1;
};
const getItem = async () => {
  try {
    const response = await getitems();
    generalStore.dataTable = response;
  } catch (error) {
    console.error(error);
  }
};

onMounted(async () => {
  await getItem();
});
</script>

<style scoped>
.table-wrapper {
  height: 70%;
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.table-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 18px rgba(17, 24, 39, 0.06);
  overflow: auto;
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
  min-width: 720px;
}

.responsive-table thead tr {
  border-bottom: 1px solid #e6e6e6;
}

.responsive-table th,
.responsive-table td {
  text-align: left;
  padding: 12px 16px;
  font-size: 14px;
  color: #111827;
  vertical-align: middle;
}

.responsive-table th {
  color: #fff;
  font-weight: 600;
}

.responsive-table tbody tr:nth-child(even) {
  background: rgba(15, 23, 42, 0.02);
}

.cell-id {
  width: 80px;
  font-weight: 600;
}
.cell-name {
  width: 220px;
}
.cell-desc {
  max-width: 420px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cell-preco {
  width: 140px;
  text-align: right;
}
.cell-valor {
  width: 140px;
  text-align: right;
  display: flex;
  justify-content: space-around;
}

i {
  cursor: pointer;
  transition: 0.2s;
}
.icon-delete {
  color: #e63946;
}
.icon-delete:hover {
  color: #b91c1c;
}
.icon-edit {
  color: #8b4513;
}
.icon-edit:hover {
  color: #5a3210;
}

@media (max-width: 970px) {
  .responsive-table {
    display: block;
    min-width: 100%;
  }
  .responsive-table thead {
    display: none;
  }
  .responsive-table tbody tr {
    display: block;
    border-bottom: 1px solid #f3f4f6;
    margin: 8px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 4px 12px rgba(17, 24, 39, 0.04);
    padding: 12px;
  }
  .responsive-table td {
    display: flex;
    justify-content: space-between;
    padding: 6px 8px;
  }
  .responsive-table td::before {
    content: attr(data-label);
    font-weight: 600;
    color: #374151;
  }
  .cell-desc {
    white-space: normal;
    overflow: visible;
  }
}
</style>
