import {patrimonyApi, unwrap} from "@/services/harena-com-api.ts";
import {HarenaDataProviderType} from "@/providers/HarenaDataProviderType.ts";

export const patrimonyProvider: HarenaDataProviderType = {
  getList: async function (page, pageSize) {
    return await unwrap(() => patrimonyApi.getPatrimoines(page, pageSize));
  },
  saveOrUpdate: async function () {
    return await unwrap(() => patrimonyApi.crupdatePatrimoines());
  },
  getOne: async function (patrimonyName) {
    return await unwrap(() => patrimonyApi.getPatrimoineByNom(patrimonyName));
  },
  delete: async function () {
    throw new Error("Not implemented");
  },
};
