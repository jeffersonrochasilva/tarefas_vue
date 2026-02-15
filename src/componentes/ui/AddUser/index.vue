<script setup lang="ts">
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import axios from "axios";

const router = useRoute();

interface Usuario {
  id: number;
  nome: string;
  email: string;
  avatar: string;
}

const form = ref<Usuario>({ id: 0, nome: "", email: "", avatar: "" });

const salvarEdicao = async () => {
  console.log("Enviando para o servidor:", form.value);

  try {
    console.log("Resposta do servidor:", form.value);
    await axios.put(
      `http://localhost:3000/addform/${form.value.id}`,
      form.value,
    );
    console.log("Resposta do servidor:", form.value);
    // console.log("Usuário atualizado com sucesso no servidor!");
  } catch (error) {
    console.error("Erro ao atualizar usuário:", error);
    alert("Ocorreu um erro ao atualizar o usuário. Tente novamente.");
  }
};

const cancelar = () => {
  form.value = { id: 0, nome: "", email: "", avatar: "" };
};

onMounted(() => {
  const getItemsInForm = async () => {
    try {
      const response = await axios.get("http://localhost:3000/form");

      console.log("teste,", router.params.id);
      const arr = response.data;
      console.log("fdgfhhdgfhd", arr.campos);

      const obj = arr.campos.filter(
        (item: Usuario) => item.id == router.params.id,
      );

      console.log("Objeto encontrado:", obj);

      if (obj.length > 0) {
        form.value = obj[0];
      }
    } catch (error) {
      console.error("Erro ao buscar itens:", error);
    }
  };
  getItemsInForm();
});
</script>

<template>
  <div class="edit-container">
    <div class="edit-card">
      <div class="edit-header">
        <h2>Editar Perfil</h2>
        <p>Atualize as informações públicas do usuário.</p>
      </div>

      <form @submit.prevent="salvarEdicao" class="edit-form">
        <div class="input-group">
          <label for="nome">Nome Completo</label>
          <input
            id="nome"
            v-model="form.nome"
            type="text"
            placeholder="Ex: Jefferson Rocha"
          />
        </div>

        <div class="input-group">
          <label for="email">E-mail Corporativo</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            placeholder="email@empresa.com"
          />
        </div>

        <div class="input-group">
          <label for="cargo">avatar</label>
          <input
            id="cargo"
            v-model="form.avatar"
            type="text"
            placeholder="avatar do usuário "
          />
          <!-- <select id="cargo" v-model="form.avatar">
            <option>Desenvolvedor Full Stack</option>
            <option>Designer UI/UX</option>
            <option>Gerente de Projetos</option>
          </select> -->
        </div>

        <div class="form-actions">
          <button type="button" class="btn-secondary" @click="cancelar">
            Cancelar
          </button>
          <button type="submit" class="btn-primary">Salvar Alterações</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.edit-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f3f4f6;
  padding: 20px;
  font-family: "Inter", sans-serif;
}

.edit-card {
  background: white;
  width: 100%;
  max-width: 500px;
  padding: 32px;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
}

.edit-header {
  margin-bottom: 24px;
}

.edit-header h2 {
  margin: 0;
  color: #111827;
  font-size: 1.5rem;
}

.edit-header p {
  color: #6b7280;
  font-size: 0.9rem;
  margin-top: 4px;
}

.edit-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.input-group label {
  font-size: 0.85rem;
  font-weight: 600;
  color: #374151;
}

.input-group input,
.input-group select {
  padding: 10px 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 1rem;
  transition:
    border-color 0.2s,
    box-shadow 0.2s;
}

.input-group input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 10px;
}

.btn-primary {
  background: #6366f1;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-primary:hover {
  background: #4f46e5;
}

.btn-secondary {
  background: white;
  color: #374151;
  border: 1px solid #d1d5db;
  padding: 10px 20px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
}

.btn-secondary:hover {
  background: #f9fafb;
}
</style>
