<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
<template>
  <div style="app"><Home /></div>
</template>
<script setup lang="ts">
import Home from "./pages/home/index.vue";
</script>
<style scoped>
.app {
  width: 100%;
  height: 100vh;
}
</style>
