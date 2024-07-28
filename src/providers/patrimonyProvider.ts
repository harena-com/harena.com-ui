import { patrimonyApi } from '@/lib/api.ts';
import { HarenaDataProviderType } from '@/lib/type.ts';
import { addIdField } from '@/lib/utils.ts';
import { Patrimoine } from '@harena-com/typescript-client';

export const patrimonyProvider: HarenaDataProviderType<Patrimoine> = {
  getOne: async (name) => {
    try {
      const response = await patrimonyApi().getPatrimoineByNom(name);
      return addIdField(response.data, 'nom');
    } catch (error) {
      console.error('Error fetching patrimony by name:', error);
      throw error;
    }
  },
  getList: async (page, pageSize) => {
    try {
      const response = await patrimonyApi().getPatrimoines(page, pageSize);
      console.log('List of initial data', response.data);
      return response.data.data!.map((patrimony) => addIdField(patrimony, 'nom'));
    } catch (error) {
      console.error('Error fetching list of patrimonies:', error);
      throw error;
    }
  },
  saveOrUpdate: async (payload) => {
    try {
      const response = await patrimonyApi().crupdatePatrimoines({ data: [payload] });
      console.log('Save or updated version: ', response.data);
      return addIdField(response.data.data![0], 'nom');
    } catch (error) {
      console.error('Error saving or updating patrimony:', error);
      throw error;
    }
  },
  delete: () => {
    throw new Error('Not Implemented');
  },
};
