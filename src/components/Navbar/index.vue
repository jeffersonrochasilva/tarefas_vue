<template>
  <div :class="generalStore.stepheader ? 'relative' : 'relative-two'">
    <transition name="slide">
      <aside
        v-if="generalStore.stepheader"
        class="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg p-4 z-50"
      >
        <ul class="space-y-3">
          <li
            :class="stepItem === 1 ? 'item-selected' : 'item'"
            @click="setStep(1)"
          >
            Cadastro
          </li>
          <li
            :class="stepItem === 2 ? 'item-selected' : 'item'"
            @click="setStep(2)"
          >
            Tabela
          </li>
          <li
            :class="stepItem === 3 ? 'item-selected' : 'item'"
            @click="setStep(3)"
          >
            Configurações
          </li>
          <li
            :class="stepItem === 4 ? 'item-selected' : 'item'"
            @click="setStep(4)"
          >
            Sair
          </li>
        </ul>
      </aside>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGeneralStore } from "../../store/general";
const generalStore = useGeneralStore();

const stepItem = ref(1);
const setStep = (item) => {
  stepItem.value = item;
  generalStore.setStepTable(item);
};
</script>

<style scoped>
.relative {
  width: 300px;
  height: calc(100vh - 100px);
  padding: 20px;
  background: #2692e6;
  transition: transform 0.4s ease;
}
.relative-two {
  transform: scaleX(0.6);
  height: calc(100vh - 100px);
  padding: 20px;
  background: #87ceeb;
}
/* Animação tipo "leque" — abre da esquerda com suavidade */
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
  transform-origin: left center;
}
.slide-enter-from {
  transform: scaleX(0);
  opacity: 0;
}
.slide-enter-to {
  transform: scaleX(1);
  opacity: 1;
}
.slide-leave-from {
  transform: scaleX(1);
  opacity: 1;
}
.slide-leave-to {
  transform: scaleX(0);
  opacity: 0;
}
.item-selected {
  padding: 10px;
  color: black;
  list-style: none;
}
.item {
  padding: 10px;
  color: white;
  list-style: none;
}
.item:hover {
  background: white;
  padding: 10px;
  color: black;
}
li {
  cursor: pointer;
}
</style>
