import {Patrimoine} from "@harena-com/typescript-client";
import {patrimonyApi} from "@/libs/api.ts";
import {HarenaDataProviderType} from "@/libs/types.ts";
import {addIdField} from "@/libs/utils.ts";

export const patrimonyProvider: HarenaDataProviderType<Patrimoine> = {
  getOne: async (nom) => {
    return patrimonyApi()
      .getPatrimoineByNom(nom)
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
