<template>
  <div class="home">
    <Header />
    <div class="contentHome">
      <Navbar />
      <div class="content">
        <BoxTitle />
        <Camp v-if="generalStore.stepregister" />
        <Table v-if="steptableValue === 2" />
        <Configue v-if="steptableValue === 3" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Navbar from "../../components/Navbar/index.vue";
import Table from "../../components/Table/index.vue";
import Configue from "../../components/Configue/index.vue";
import BoxTitle from "../../components/commom/BoxTitle/index.vue";
import Camp from "../../components/commom/Camp/index.vue";
import Header from "../../components/Header/index.vue";
import { computed } from "vue";
import { useGeneralStore } from "../../store/general";
const generalStore = useGeneralStore();

const steptableValue = computed(() => {
  return generalStore.stepTable;
});
</script>
<style scoped>
.home {
  width: 100%;
  height: 100vh;
  background: rgb(225, 224, 224);
}
.contentHome {
  width: 100%;
  height: calc(100vh - 60px);
  background: rgb(246, 244, 244);
  display: flex;
  align-items: center;
}
.content {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(100%);
  height: calc(100vh - 60px);
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
