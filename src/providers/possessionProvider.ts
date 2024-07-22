import {possessionApi, unwrap} from "@/services/harena-com-api.ts";
import {HarenaDataProviderType} from "@/providers/HarenaDataProviderType.ts";

export const possessionProvider: HarenaDataProviderType = {
  saveOrUpdate: async function (patrimonyName) {
    return await unwrap(() =>
      possessionApi.crupdatePatrimoinePossessions(<string>patrimonyName)
    );
  },
  getList: async function (page, pageSize, patrimonyName) {
    return await unwrap(() =>
      possessionApi.getPatrimoinePossessions(
        <string>patrimonyName,
        page,
        pageSize
      )
    );
  },
  getOne: async function (patrimonyName, possessionName) {
    return await unwrap(() =>
      possessionApi.getPatrimoinePossessionByNom(patrimonyName, possessionName)
    );
  },
  delete: async function (patrimonyName, possessionName) {
    return await unwrap(() =>
      possessionApi.deletePatrimoinePossessionByNom(
        patrimonyName,
        possessionName
      )
    );
  },
};
