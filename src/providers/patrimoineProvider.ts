import {Patrimoine} from "@harena-com/typescript-client";
import {patrimonyApi} from "@/lib/api.ts";
import {HarenaDataProviderType} from "@/lib/types.ts";
import {addIdField} from "@/lib/utils.ts";

export const patrimoineProvider: HarenaDataProviderType<Patrimoine> = {
  getOne: async (nom) => {
    return patrimonyApi()
      .getPatrimoineByNom(nom)
      .then((response) => addIdField(response.data, "nom"));
  },
  getList: async (page, pageSize) => {
    return patrimonyApi()
      .getPatrimoines(page, pageSize)
      .then((response) =>
        response.data.data!.map((patrimoine) => addIdField(patrimoine, "nom"))
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
