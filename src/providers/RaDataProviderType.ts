export type RaListResponseType = {
  data: Array<unknown>;
  total: number;
};

export type RaSingleResponseType = {
  data: unknown;
};

export type RaDataProviderType = {
  getList: (
    resourceType: string,
    params: unknown
  ) => Promise<RaListResponseType>;
  getOne: (
    resourceType: string,
    params: unknown
  ) => Promise<RaSingleResponseType>;
  create: (
    resourceType: string,
    params: unknown
  ) => Promise<RaSingleResponseType>;
  update: (
    resourceType: string,
    params: unknown
  ) => Promise<RaSingleResponseType>;
  delete: (
    resourceType: string,
    params: unknown
  ) => Promise<RaSingleResponseType>;
};
