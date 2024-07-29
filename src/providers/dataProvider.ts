import { futureProjectionProvider } from '@/providers/futureProjectionProvider.ts';
import { patrimonyProvider } from '@/providers/patrimonyProvider.ts';
import { possessionProvider } from '@/providers/possessionProvider.ts';

import { HarenaDataProviderType } from '@/lib/type.ts';
import { DataProvider } from 'react-admin';

const getProvider = (resourceType: string): HarenaDataProviderType<any> => {
  if (resourceType === 'patrimony') return patrimonyProvider;
  if (resourceType === 'possession') return possessionProvider;
  if (resourceType === 'futureProjection') return futureProjectionProvider;
  throw new Error('Unknown resource type ' + resourceType);
};

export const dataProvider: DataProvider = {
  create: async (resource, { meta, data: payload }) => {
    const response = await getProvider(resource).saveOrUpdate(payload, {
      ...meta,
      mutationType: 'CREATE',
    });
    return { data: response };
  },
  update: async (resource, { data: payload, meta }) => {
    const response = await getProvider(resource).saveOrUpdate(payload, {
      ...meta,
      mutationType: 'UPDATE',
    });
    return { data: response };
  },
  getList: async (resource, { pagination = { page: 0, perPage: 10 }, meta }) => {
    const page = pagination.page || 0;
    const perPage = pagination.perPage || 10;

    const response = await getProvider(resource).getList(page - 1, perPage, meta);

    return {
      data: response,
      total: response.length,
      pageInfo: {
        hasNextPage: response.length >= perPage,
        hasPreviousPage: page > 0,
      },
    };
  },
  getOne: async (resource, { id: payloadId, meta }) => {
    const response = await getProvider(resource).getOne(payloadId as string, meta);
    return { data: response };
  },
  delete: async (resource, { id: payloadId, meta }) => {
    const response = await getProvider(resource).delete(payloadId as string, meta);
    return { data: response };
  },
  deleteMany: () => {
    throw new Error('Not Implemented');
  },
  getMany: () => {
    throw new Error('Not Implemented');
  },
  getManyReference: () => {
    throw new Error('Not Implemented');
  },
  updateMany: () => {
    throw new Error('Not Implemented');
  },
};
