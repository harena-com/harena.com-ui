import { renderMoney } from '@/operations/common/utils/renderMoney.ts';

import { CreateButton, Datagrid, DateField, FunctionField, List, TextField, TopToolbar } from 'react-admin';

const PatrimonyListActions = () => {
  return (
    <TopToolbar>
      <CreateButton />
    </TopToolbar>
  );
};

export default function PatrimonyList() {
  return (
    <List actions={<PatrimonyListActions />}>
      <Datagrid bulkActionButtons={false}>
        <TextField source='nom' label='Nom' />
        <DateField source='t' label='Date T' />
        <TextField source='possesseur.nom' label='Possesseur' />
        <FunctionField render={(patrimony) => renderMoney(patrimony.valeur_comptable)} label='Valeur Comptable' />
      </Datagrid>
    </List>
  );
}
