import {Configuration} from "@harena-com/typescript-client";
import {v4 as uuidv4} from "uuid";

export const BASE_PATH = import.meta.env.VITE_HARENA_COM_API;

export const getConfiguration = () => {
  const newConfig: Configuration = new Configuration();
  newConfig.basePath = BASE_PATH;
  return newConfig;
};

export const addIdField = <T>(data: T) => {
  const uniqueId = uuidv4();

  return {...data, id: uniqueId};
};

export const renderMoney = (value: number) => {
  return `${value} Ar`;
};
