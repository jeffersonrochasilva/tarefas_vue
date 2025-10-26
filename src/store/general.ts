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
  const stepUpdate = ref(false);
  const stepTable = ref(1);
  const dataTable = ref([]);
  const dataUpdate = ref({});
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
    data,
    dataTable,
    doubleCount,
    stepTable,
    dataUpdate,
    stepUpdate,
    increment,
    setDataTable,
    setStepTable,
    getItemsInJson,
    setDataUpdate,
    setGeneralStore,
  };
});
