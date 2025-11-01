<template>
  <div class="configue">
    <div v-for="item in colors">
      <div
        class="box"
        key="item"
        :style="{ background: item.color }"
        @click="getColor(item.color)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGeneralStore } from "../../store/general";
const generalStore = useGeneralStore();

const colors = ref([
  { color: "#2692E6" },
  { color: "#E62626" },
  { color: "#2626E67E" },
  { color: "red" },
  { color: "#E6D926" },
  { color: "#8A26E6" },
  { color: "#E67E26" },
  { color: "#2E2E2E" },
  { color: "#CCCCCC" }, //
  { color: "#A0522D" },
  { color: "#B45F35" },
  { color: "#8B4513" },
  { color: "#26E67E" },
  { color: "#2BAA66" },
  { color: "#B3B3B3" },
]);

const getColor = (item) => {
  generalStore.background = item;
};
</script>

<style scoped>
.configue {
  padding: 40px;
  display: flex;
  height: 600px;
  overflow: auto;
  flex-wrap: wrap;
}
.box {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin: 20px;
  cursor: pointer;
  background: red;
}
</style>
