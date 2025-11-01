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
  const stepheader = ref(true);
  const stepregister = ref(false);
  const stepUpdate = ref(false);
  const stepTable = ref(2);
  const dataTable = ref([]);
  const dataUpdate = ref({});
  const background = ref("#2692e6");
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
  const setDataTable = (item: any) => {
    dataTable.value = item;
  };
  function setGeneralStore() {
    stepheader.value = !stepheader.value;
    console.log(stepheader.value);
  }
  const setStepTable = (item: number) => {
    stepTable.value = item;
  };
  const setDataUpdate = (item: any) => {
    dataUpdate.value = item;
    console.log("segundo console", item);
  };
  return {
    count,
    stepheader,
    background,
    data,
    dataTable,
    doubleCount,
    stepTable,
    dataUpdate,
    stepregister,
    stepUpdate,
    increment,
    setDataTable,
    setStepTable,
    getItemsInJson,
    setDataUpdate,
    setGeneralStore,
  };
});
