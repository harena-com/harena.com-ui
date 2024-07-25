import {HarenaDataProviderType} from "@/lib/types.ts";
import {PossessionAvecType} from "@harena-com/typescript-client";
import {possessionApi} from "@/lib/api.ts";
import {addIdField} from "@/lib/utils.ts";

export const possessionProvider: HarenaDataProviderType<PossessionAvecType> = {
  getList: async (page, pageSize, meta) => {
    return possessionApi()
      .getPatrimoinePossessions(meta, page, pageSize)
      .then((response) =>
        response.data.data!.map((possessionWithType) =>
          addIdField(possessionWithType)
        )
      );
  },
  getOne: async () => {
    throw new Error("Not implemented");
  },
  saveOrUpdate: async () => {
    throw new Error("Not implemented");
  },
  delete: async () => {
    throw new Error("Not implemented");
  },
};
