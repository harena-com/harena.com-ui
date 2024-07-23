import {HarenaDataProviderType} from "@/providers/HarenaDataProviderType.ts";
import {patrimonyProvider} from "@/providers/patrimoineProvider.ts";
import {DataProvider as RaDataProvider} from "react-admin";

const getProvider = (resourceType: string): HarenaDataProviderType<any> => {
  if (resourceType === "patrimoine") return patrimonyProvider;
  throw new Error("Unknown resource type " + resourceType);
};

const dataProvider: RaDataProvider = {
  getList: async function (resource, {pagination, sort, filter, meta}) {
    const response = await getProvider(resource).getList(
      pagination?.page || 1,
      pagination?.perPage || 10,
      filter,
      sort,
      meta
    );
    return {
      data: response,
      total: response.length,
      pageInfo: {
        hasNextPage: response.length >= (pagination?.perPage || 10),
        hasPreviousPage: (pagination?.page || 1) > 1,
      },
    };
  },
  getOne: async function (resource, {id: payloadId, meta}) {
    const response = await getProvider(resource).getOne(
      payloadId as string,
      meta
    );
    return {data: response};
  },
  create: async function (resource, {meta, data: payload}) {
    const response = await getProvider(resource).saveOrUpdate(payload, {
      ...meta,
      mutationType: "CREATE",
    });
    return {data: response};
  },
  update: async function (resource, {data: payload, meta}) {
    const response = await getProvider(resource).saveOrUpdate(payload, {
      ...meta,
      mutationType: "UPDATE",
    });
    return {data: response};
  },
  delete: async (resource, {id: payloadId, meta}) => {
    const response = await getProvider(resource).delete(
      payloadId as string,
      meta
    );
    return {data: response};
  },
  deleteMany: () => {
    throw new Error("Not Implemented");
  },
  getMany: () => {
    throw new Error("Not Implemented");
  },
  getManyReference: () => {
    throw new Error("Not Implemented");
  },
  updateMany: () => {
    throw new Error("Not Implemented");
  },
};

export default dataProvider;
