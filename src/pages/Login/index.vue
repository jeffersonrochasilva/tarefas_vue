<template>
  <div class="auth-container">
    <div class="auth-card">
      <h1>{{ mode === "login" ? "Entrar" : "Cadastrar" }}</h1>

      <form @submit.prevent="mode === 'login' ? login() : register()">
        <div v-if="mode === 'register'">
          <label>Nome</label>
          <input v-model="form.name" type="text" placeholder="Seu nome" />
        </div>

        <label>Email</label>
        <input
          v-model="form.email"
          type="email"
          placeholder="seu@exemplo.com"
        />

        <label>Senha</label>
        <input v-model="form.password" type="password" placeholder="Senha" />

        <p class="error" v-if="error">{{ error }}</p>
        <p class="success" v-if="success">{{ success }}</p>

        <div class="actions">
          <button class="btn primary" type="submit">
            {{ mode === "login" ? "Entrar" : "Cadastrar" }}
          </button>
          <button class="btn link" type="button" @click="toggleMode">
            {{ mode === "login" ? "Criar conta" : "Já tenho conta" }}
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { registerUsers, loginUser } from "../../services/ActivitiesService.js";
const mode = ref("login");
const form = reactive({ name: "", email: "", password: "" });
const user = ref(null);
const error = ref("");
const success = ref("");
const router = useRouter();

function toggleMode() {
  mode.value = mode.value === "login" ? "register" : "login";
  error.value = "";
  success.value = "";
}

async function register() {
  error.value = "";
  success.value = "";
  if (!form.name || !form.email || !form.password) {
    error.value = "Preencha todos os campos.";
    return;
  }

  const users = {
    name: form.name,
    email: form.email,
    password: form.password,
  };
  try {
    await registerUsers(users);
    form.password = "";
    toggleMode();
    success.value = "Usuário cadastrado!";
  } catch (error) {
    console.error(error);
  }
}

const login = async () => {
  error.value = "";
  success.value = "";
  const body = {
    email: form.email,
    password: form.password,
  };
  try {
    const response = await loginUser(body);
    router.replace({ name: "Home" });
  } catch ({ response }) {
    error.value = response.data.message;
  }
};
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  font-family: "Inter", sans-serif;
  background-color: #f3f4f6;
}

.auth-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
}

.auth-card {
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  color: #111827;
}

label {
  display: block;
  margin-bottom: 4px;
  color: #374151;
  font-size: 14px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  outline: none;
}

input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn {
  padding: 10px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  border: none;
}

.btn.primary {
  background-color: #2563eb;
  color: white;
}

.btn.link {
  background: none;
  color: #2563eb;
  text-decoration: underline;
}

.btn.outline {
  background: transparent;
  border: 1px solid #2563eb;
  color: #2563eb;
}

.error {
  color: #dc2626;
  font-size: 14px;
}

.success {
  color: #16a34a;
  font-size: 14px;
}
</style>
