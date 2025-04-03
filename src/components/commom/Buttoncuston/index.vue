<template>
  <div class="boxButton">
    <button v-on:click="getItemsUser" class="button">Registrar</button>
  </div>
</template>
<script lang="ts" setup>
import axios from "axios";

const getItemsUser = async () => {
  try {
    const response = await axios.get("http://localhost:3000/usuarios");
    console.log("response do data", response.data);
  } catch (error) {
    console.log(error);
  }
};
</script>
<style scoped>
.boxButton {
  width: 180px;
  height: 40px;
}

.button {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 4px;
  color: gray;
}
.button:hover {
  background: rgb(198, 195, 195);
  cursor: pointer;
}
</style>
