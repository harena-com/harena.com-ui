import {projectionFutureApi, unwrap} from "@/services/harena-com-api.ts";

export const futureProjectionProvider = {
  getImpossibleFluxListByPatrimonyInGivenInterval: async function (
    patrimonyName: string,
    start?: string | undefined,
    end?: string | undefined
  ) {
    return await unwrap(() =>
      projectionFutureApi.getPatrimoineFluxImpossibles(
        patrimonyName,
        start,
        end
      )
    );
  },
  getPatrimonyProjectionGraphInGivenDateRange: async function (
    patrimonyName: string,
    start?: string | undefined,
    end?: string | undefined
  ) {
    return await unwrap(() =>
      projectionFutureApi.getPatrimoineGraph(patrimonyName, start, end)
    );
  },
};
