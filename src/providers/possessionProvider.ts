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
    return possessionApi()
      .getPatrimoinePossessionByNom(patrimonyName, possessionName)
      .then((response) => addPossessionId(response.data));
  },
  getList: async (page, pageSize, _filter, _sort, { patrimonyName }) => {
    return possessionApi()
      .getPatrimoinePossessions(patrimonyName, page, pageSize)
      .then((response) => response.data.data!.map((possession) => addPossessionId(possession)));
  },
  saveOrUpdate: async (payload, { patrimonyName }) => {
    return possessionApi()
      .crupdatePatrimoinePossessions(patrimonyName, 0, 0, {
        data: [payload as any],
      })
      .then((response) => addPossessionId(response.data.data![0]));
  },
  delete: async (possessionName, { patrimonyName }) => {
    return possessionApi().deletePatrimoinePossessionByNom(patrimonyName, possessionName).then();
  },
};
