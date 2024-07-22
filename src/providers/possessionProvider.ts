import {possessionApi, unwrap} from "@/services/harena-com-api.ts";

export const possessionProvider = {
  obtenirListePossessionsPatrimoine: async function (
    nomPossession: string,
    page?: number | undefined,
    tailleDePage?: number | undefined
  ) {
    return await unwrap(() =>
      possessionApi.getPatrimoinePossessions(nomPossession, page, tailleDePage)
    );
  },
  obtenirPossessionParNom: async function (
    nomPatrimoine: string,
    nomPossession: string
  ) {
    return await unwrap(() =>
      possessionApi.getPatrimoinePossessionByNom(nomPatrimoine, nomPossession)
    );
  },
  ajouterOuMettreJourPatrimoine: async function (nomPossession: string) {
    return await unwrap(() =>
      possessionApi.crupdatePatrimoinePossessions(nomPossession)
    );
  },
  effacerPossessionPatrimoine: async function (
    nomPatrimoine: string,
    nomPossession: string
  ) {
    return await unwrap(() =>
      possessionApi.deletePatrimoinePossessionByNom(
        nomPatrimoine,
        nomPossession
      )
    );
  },
};
