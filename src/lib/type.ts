export type MutationType = 'CREATE' | 'UPDATE';

export type HarenaDataProviderType<T> = {
  getOne: (id: string, meta: any) => Promise<T>;
  saveOrUpdate: (payload: T, meta: { mutationType: MutationType; [T: string]: any }) => Promise<T>;
  getList: (page?: number, pageSize?: number, meta?: any) => Promise<T[]>;
  delete: (id: string, meta: any) => Promise<any>;
};
