import {Configuration} from "@harena-com/typescript-client";

export const BASE_PATH = import.meta.env.VITE_HARENA_COM_VIRTUAL_SERVER;

export const getConfiguration = () => {
  const newConfig: Configuration = new Configuration();
  newConfig.basePath = BASE_PATH;
  return newConfig;
};

export const addIdField = <T>(data: T, key: keyof T) => {
  return {...data, id: data[key]};
};

export const renderMoney = (value: number) => {
  return `${value} Ar`;
};
