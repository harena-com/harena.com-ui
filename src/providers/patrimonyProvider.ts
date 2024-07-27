import {Patrimoine} from "@harena-com/typescript-client";
import {patrimonyApi} from "@/lib/api.ts";
import {HarenaDataProviderType} from "@/lib/types.ts";
import {addIdField} from "@/lib/utils.ts";

export const patrimonyProvider: HarenaDataProviderType<Patrimoine> = {
  getOne: async (patrimonyName) => {
    return patrimonyApi()
      .getPatrimoineByNom(patrimonyName)
      .then((response) => addIdField(response.data, "nom"));
  },
  getList: async (page, pageSize) => {
    return patrimonyApi()
      .getPatrimoines(page, pageSize)
      .then((response) =>
        response.data.data!.map((patrimony) => addIdField(patrimony, "nom"))
      );
  },
  saveOrUpdate: async (payload) => {
    return patrimonyApi()
      .crupdatePatrimoines({data: [payload]})
      .then((response) => addIdField(response.data.data![0], "nom"));
  },
  delete: () => {
    throw new Error("Not Implemented");
  },
};
