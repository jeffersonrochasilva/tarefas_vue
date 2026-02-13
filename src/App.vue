<template>
  <header class="main-header">
    <h1>Meu Sistema de Usuários</h1>
    <nav>
      <router-link to="/">Lista de Usuários</router-link>
    </nav>
  </header>

  <main>
    <router-view />
  </main>
</template>

<style>
/* Estilos globais para o layout principal */
.main-header {
  background: #111827;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.main-header a {
  color: #6366f1;
  text-decoration: none;
  font-weight: bold;
}

.main-header a.router-link-active {
  color: white; /* Cor especial para o link da página atual */
}
</style>
