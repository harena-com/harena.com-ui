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
  getList: async (resource, { pagination, meta }) => {
    const response = await getProvider(resource).getList(pagination?.page || 1, pagination?.perPage || 10, meta);
    return {
      data: response,
      total: response.length,
      pageInfo: {
        hasNextPage: response.length >= (pagination?.perPage || 10),
        hasPreviousPage: (pagination?.page || 1) > 1,
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
