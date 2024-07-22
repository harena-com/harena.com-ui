import {projectionFutureApi, unwrap} from "@/services/harena-com-api.ts";

export const projectionFutureProvider = {
  obtenirListeFluxImpossiblePatrimoineDansUneIntervalleDonnee: async function (
    nomPatrimoine: string,
    debut?: string | undefined,
    fin?: string | undefined
  ) {
    return await unwrap(() =>
      projectionFutureApi.getPatrimoineFluxImpossibles(
        nomPatrimoine,
        debut,
        fin
      )
    );
  },
  obtenirGrapheDeProjectionPatrimoineSurUnePlageDeDateDonnee: async function (
    nomPatrimoine: string,
    debut?: string | undefined,
    fin?: string | undefined
  ) {
    return await unwrap(() =>
      projectionFutureApi.getPatrimoineGraph(nomPatrimoine, debut, fin)
    );
  },
};
