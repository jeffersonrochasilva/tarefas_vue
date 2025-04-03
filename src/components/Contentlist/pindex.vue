<template>
  <div class="list">
    <div v-for="item in generalStore.data">
      <span class="text">{{ item.item }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from "vue";
import { useGeneralStore } from "../../store/general";
const generalStore = useGeneralStore();
onMounted(() => {
  generalStore.getItemsInJson();
});
const tarefas = computed(() => {
  return generalStore.data;
});
</script>
<style scoped>
.list {
  width: 700px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 4px;
  justify-content: flex-start;
  margin-top: 60px;
  padding: 20px;
  box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
}
.text {
  margin-bottom: 10px;
}
</style>
