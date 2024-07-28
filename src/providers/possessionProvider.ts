import { possessionApi } from '@/lib/api.ts';
import { HarenaDataProviderType } from '@/lib/type.ts';
import { addIdField } from '@/lib/utils.ts';
import { Possession, PossessionAvecType } from '@harena-com/typescript-client';

const getPossessionTypeValue = (value: PossessionAvecType) => {
  if (value.type === 'ARGENT') return value.argent!;
  if (value.type === 'FLUXARGENT') return value.flux_argent!;
  if (value.type === 'MATERIEL') return value.materiel!;
  throw new Error(`Unrecognized type '${value.type}'`);
};

const addPossessionId = (possession: PossessionAvecType) => {
  return addIdField(getPossessionTypeValue(possession), 'nom');
};

export const possessionProvider: HarenaDataProviderType<Possession> = {
  getOne: async (possessionName, { patrimonyName }) => {
    try {
      const response = await possessionApi().getPatrimoinePossessionByNom(patrimonyName, possessionName);
      return addPossessionId(response.data);
    } catch (error) {
      console.error('Error fetching possession by name:', error);
      throw error;
    }
  },
  getList: async (page, pageSize, { patrimonyName }) => {
    try {
      const response = await possessionApi().getPatrimoinePossessions(patrimonyName, page, pageSize);
      return response.data.data!.map((possession) => addPossessionId(possession));
    } catch (error) {
      console.error('Error fetching list of possessions:', error);
      throw error;
    }
  },
  saveOrUpdate: async (payload, { patrimonyName }) => {
    try {
      const response = await possessionApi().crupdatePatrimoinePossessions(patrimonyName, 0, 0, {
        data: [payload as any],
      });
      return addPossessionId(response.data.data![0]);
    } catch (error) {
      console.error('Error saving or updating possession:', error);
      throw error;
    }
  },
  delete: async (possessionName, { patrimonyName }) => {
    try {
      await possessionApi().deletePatrimoinePossessionByNom(patrimonyName, possessionName);
    } catch (error) {
      console.error('Error deleting possession by name:', error);
      throw error;
    }
  },
};
