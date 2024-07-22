import {patrimoineApi, unwrap} from "@/services/harena-com-api.ts";

export const patrimoineProvider = {
  obtenirListePatrimoine: async function (
    page?: number | undefined,
    pageSize?: number | undefined
  ) {
    return await unwrap(() => patrimoineApi.getPatrimoines(page, pageSize));
  },
  obtenirPatrimoineParNom: async function (nomPatrimoine: string) {
    return await unwrap(() => patrimoineApi.getPatrimoineByNom(nomPatrimoine));
  },
  ajouterOuMettreJourPatrimoine: async function () {
    return await unwrap(() => patrimoineApi.crupdatePatrimoines());
  },
};
