import api from "./axios";

import {
  ENDPOINTS_CADASTRO_USUARIOS,
  ENDPOINTS_CADASTRO_ITEMS,
  ENDPOINTS_LOGIN,
  ENDPOINTS_ITEMS,
  ENDPOINTS_DELETE_ITEMS,
  ENDPOINTS_ATUALIZAR_ITEMS,
} from "../constants/apiEndpoints";

export const registerUsers = async (user) => {
  try {
    const response = await api.post(ENDPOINTS_CADASTRO_USUARIOS, user);
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async (user) => {
  try {
    await api.post(ENDPOINTS_LOGIN, user);
  } catch (erro) {
    console.error(error);
  }
};

export const addItems = async (item) => {
  try {
    await api.post(ENDPOINTS_CADASTRO_ITEMS, item);
  } catch (error) {
    console.log(error);
  }
};

export const updateItems = async (param) => {
  try {
    api.patch(ENDPOINTS_ATUALIZAR_ITEMS, param);
  } catch (erro) {
    console.log(erro);
  }
};

export const getitems = async () => {
  try {
    const { data } = await api.get(ENDPOINTS_ITEMS);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const deleteItem = async (id) => {
  try {
    await api.delete(ENDPOINTS_DELETE_ITEMS + id);
  } catch (error) {
    console.log(error);
  }
};
