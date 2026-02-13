<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
interface Usuario {
  id: number;
  nome: string;
  email: string;
  avatar: string;
}

defineProps<{
  items: Usuario[];
}>();

const goToAddUser = (item: Usuario) => {
  console.log("Gerenciar usuário:", item);
  router.push(`/register/${item.id}`);
  // Aqui você pode implementar a lógica para navegar para a página de gerenciamento do usuário
};
</script>

<template>
  <div class="card-container">
    <div class="header">
      <h3>Usuários Ativos</h3>
      <!-- <span class="badge">{{ items.length }} usuários</span> -->
    </div>

    <div class="table-wrapper">
      <table class="modern-table">
        <thead>
          <tr>
            <th>Usuário</th>
            <th>E-mail</th>
            <th class="text-right">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in items" :key="user.id">
            <td>
              <div class="user-info">
                <div class="avatar">{{ user.avatar }}</div>
                <span class="user-name">{{ user.nome }}</span>
              </div>
            </td>
            <td>
              <span class="user-email">{{ user.email }}</span>
            </td>
            <td class="text-right">
              <button @click="goToAddUser(user)" class="btn-action">
                Gerenciar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
/* Container Principal */
.card-container {
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  padding: 24px;
  max-width: 800px;
  margin: 40px auto;
  font-family:
    "Inter",
    -apple-system,
    sans-serif;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.header h3 {
  margin: 0;
  color: #1a1a1a;
  font-size: 1.25rem;
}

.badge {
  background: #eef2ff;
  color: #4f46e5;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

/* Tabela */
.table-wrapper {
  overflow-x: auto;
}

.modern-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.modern-table th {
  padding: 12px 16px;
  color: #6b7280;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-bottom: 1px solid #f3f4f6;
}

.modern-table td {
  padding: 16px;
  border-bottom: 1px solid #f3f4f6;
  vertical-align: middle;
}

.modern-table tr:last-child td {
  border-bottom: none;
}

.modern-table tr:hover {
  background-color: #f9fafb;
}

/* Detalhes do Usuário */
.user-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 36px;
  height: 36px;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
}

.user-name {
  color: #111827;
  font-weight: 500;
}

.user-email {
  color: #6b7280;
}

/* Botão */
.btn-action {
  background: white;
  border: 1px solid #e5e7eb;
  padding: 6px 12px;
  border-radius: 6px;
  color: #374151;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-action:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
}

.text-right {
  text-align: right;
}
</style>
