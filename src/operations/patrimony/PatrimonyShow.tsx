import { renderMoney } from '@/operations/common/utils/renderMoney.ts';
import PossessionList from '@/operations/possession/PossessionList.tsx';

import { usePatrimonyStore } from '@/store/usePatrimoineStore.ts';
import { useEffect } from 'react';
import { DateField, EditButton, FunctionField, Show, SimpleShowLayout, TextField, TopToolbar } from 'react-admin';
import { useParams } from 'react-router-dom';

const PatrimonyShowActions = () => {
  return (
    <TopToolbar>
      <EditButton />
    </TopToolbar>
  );
};

export default function PatrimonyShow() {
  const { id } = useParams();
  const setPatrimonyId = usePatrimonyStore((state) => state.setPatrimonyId);

  useEffect(() => {
    if (id) {
      setPatrimonyId(id);
    }
  }, [id, setPatrimonyId]);

  if (!id) {
    return <h1>Patrimony identifier not found</h1>;
  }

  return (
    <>
      <Show title='Patrimony details' id={id} actions={<PatrimonyShowActions />}>
        <SimpleShowLayout>
          <TextField source='nom' label='Nom' />
          <DateField source='t' label='Date T' />
          <TextField source='possesseur.nom' label='Possesseur' />
          <FunctionField render={(patrimony) => renderMoney(patrimony.valeur_comptable)} label='Valeur Comptable' />
        </SimpleShowLayout>
      </Show>
      <PossessionList />
    </>
  );
}
