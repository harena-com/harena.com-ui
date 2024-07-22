import {patrimoineApi, unwrap} from "@/services/harena-com-api.ts";
import type {RawAxiosRequestConfig} from "axios";
import {GetPatrimoines200Response} from "@harena-com/typescript-client";

export const patrimoineProvider = {
  getList: async function (
    page?: number | undefined,
    pageSize?: number | undefined,
    options?: RawAxiosRequestConfig
  ) {
    return await unwrap(() =>
      patrimoineApi.getPatrimoines(page, pageSize, options)
    );
  },
  saveOrUpdate: async function (
    getPatrimoines200Response?: GetPatrimoines200Response,
    options?: RawAxiosRequestConfig
  ) {
    return await unwrap(() =>
      patrimoineApi.crupdatePatrimoines(getPatrimoines200Response, options)
    );
  },
  getOneByName: async function (name: string, options?: RawAxiosRequestConfig) {
    return await unwrap(() => patrimoineApi.getPatrimoineByNom(name, options));
  },
};
