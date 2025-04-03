import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
interface Tarefas {
  id: string;
  item: string;
  categoria: string;
}

export const useGeneralStore = defineStore("general", () => {
  const count = ref(0);
  let data = ref<Tarefas[]>([]);

  const doubleCount = computed(() => count.value * 2);

  async function getItemsInJson() {
    try {
      const response = await axios.get<Tarefas[]>(
        "http://localhost:3000/tarefas"
      );
      data.value = response.data;
      console.log(data);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  }

  function increment() {
    count.value++;
  }

  return { count, data, doubleCount, increment, getItemsInJson };
});
