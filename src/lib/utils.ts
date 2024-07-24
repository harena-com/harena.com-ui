import {Configuration} from "@harena-com/typescript-client";

export const BASE_PATH = import.meta.env.REACT_APP_HARENA_COM_API!;

export const getConfiguration = () => {
  const newConfig: Configuration = new Configuration();
  newConfig.basePath = BASE_PATH;
  return newConfig;
};

export const addIdField = <T>(data: T, key: keyof T) => {
  return {...data, id: data[key]};
};
