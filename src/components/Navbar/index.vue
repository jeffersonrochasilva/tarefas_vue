<template>
  <div
    :class="generalStore.stepheader ? 'relative' : 'relative-two'"
    :style="{ background: generalStore.background }"
  >
    <transition name="slide">
      <aside
        v-if="generalStore.stepheader"
        class="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white shadow-lg p-4 z-50"
      >
        <ul style="margin-right: 25px">
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
            @click="router.replace('/')"
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
import { useRouter } from "vue-router";
const generalStore = useGeneralStore();
const router = useRouter();
const stepItem = ref(2);
const setStep = (item) => {
  if (item === 1) {
    return (generalStore.stepregister = true);
  }
  stepItem.value = item;
  generalStore.setStepTable(item);
};
</script>

<style scoped>
.relative {
  height: calc(100vh - 100px);
  padding: 20px;
  transition: all 0.4s ease;
  transform-origin: right;
}
.relative-two {
  transition: all 0.4s ease;
  transform-origin: left;
  height: calc(100vh - 100px);
  padding: 20px;
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
  transform-origin: left;
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
@media (max-width: 545px) {
  .relative {
    position: absolute;
  }
  .relative-two {
    position: absolute;
  }
}
</style>
