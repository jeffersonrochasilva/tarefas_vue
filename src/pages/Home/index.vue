<template>
  <div class="home">
    <Navbar />
    <div class="content">
      <div class="boxTitle">
        <span class="title">Meu quadro de tarefas</span>
      </div>
      <div class="teste">
        <Camp />
        <Button />
      </div>
      <div class="boxcontent">
        <ContentList />
      </div>
      <!-- <div v-else>
        <Nodate />
      </div> -->
      <!-- <h1>{{ dataFile.length }}</h1> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../../components/Navbar/index.vue";
import Camp from "../../components/commom/Camp/index.vue";
import Button from "../../components/commom/Buttoncuston/index.vue";
import ContentList from "../../components/Contentlist/pindex.vue";
import Nodate from "../../components/Nodate/index.vue";
import { useGeneralStore } from "../../store/general";
import { computed } from "vue";
const generalStore = useGeneralStore();
const dataFile = computed(() => {
  return generalStore.data;
});
const valueData = computed(() => {
  if (dataFile.value.length > 0) {
    return true;
  } else {
    return false;
  }
});
</script>
<style scoped>
.home {
  width: 100%;
  display: flex;
  height: 100vh;
  background: rgb(225, 224, 224);
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  width: calc(100% - 440px);
  height: calc(100% - 40px);
}
.title {
  font-family: Nunito;
  font-size: 50px;
  font-weight: 700;
}
.teste {
  width: 740px;
  height: 40px;
  display: flex;
  padding: 0 !important;
  margin: 0;
  justify-content: space-between;
  margin-top: 30px;
}
</style>
