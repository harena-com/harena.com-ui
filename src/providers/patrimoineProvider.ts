import {patrimoineApi, unwrap} from "@/services/harena-com-api.ts";
import {HarenaDataProviderType} from "@/providers/HarenaDataProviderType.ts";

export const patrimonyProvider: HarenaDataProviderType = {
  getList: async function (page, pageSize) {
    return await unwrap(() => patrimoineApi.getPatrimoines(page, pageSize));
  },
  saveOrUpdate: async function () {
    return await unwrap(() => patrimoineApi.crupdatePatrimoines());
  },
  getOne: async function (patrimonyName) {
    return await unwrap(() => patrimoineApi.getPatrimoineByNom(patrimonyName));
  },
  delete: async function () {
    throw new Error("Not implemented");
  },
};
