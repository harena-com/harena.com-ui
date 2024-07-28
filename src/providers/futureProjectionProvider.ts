import { futureProjectionApi } from '@/lib/api.ts';
import { HarenaDataProviderType } from '@/lib/type.ts';
import { addIdField } from '@/lib/utils.ts';
import { FluxImpossibles } from '@harena-com/typescript-client';

export const futureProjectionProvider: HarenaDataProviderType<FluxImpossibles> = {
  getOne: () => {
    throw new Error('Not implemented');
  },
  getList: async (_page, _pageSize, { patrimonyName, start, end }) => {
    try {
      const response = await futureProjectionApi().getPatrimoineFluxImpossibles(patrimonyName, start, end);
      return response.data.data!.map((patrimony) => addIdField(patrimony, 'nom_argent'));
    } catch (error) {
      console.error('Error fetching patrimony flux impossibles:', error);
      throw error;
    }
  },
  saveOrUpdate: () => {
    throw new Error('Not implemented');
  },
  delete: () => {
    throw new Error('Not Implemented');
  },
};
