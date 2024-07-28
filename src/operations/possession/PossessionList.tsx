import { renderMoney } from '@/operations/common/utils/renderMoney.ts';

import { usePatrimonyStore } from '@/store/usePatrimoineStore.ts';
import { CreateButton, Datagrid, DateField, FunctionField, List, ShowButton, TextField, TopToolbar } from 'react-admin';

const PossessionListActions = () => {
  return (
    <TopToolbar>
      <CreateButton />
    </TopToolbar>
  );
};

export default function PossessionList() {
  const patrimonyName = usePatrimonyStore((state) => state.patrimonyId);

  if (!patrimonyName) {
    return <h1>Please provide patrimony Name</h1>;
  }

  return (
    <List resource='possession' actions={<PossessionListActions />} queryOptions={{ meta: { patrimonyName } }}>
      <Datagrid bulkActionButtons={false}>
        <DateField source='t' label='Date T' />
        <TextField source='nom' label='nom' />
        <FunctionField render={(possession) => renderMoney(possession.valeur_comptable)} label='Valeur Comptable' />
        <FunctionField render={(possession) => possession.devise.nom} label='Nom Devise' />
        <FunctionField render={(possession) => possession.devise.code} label='Code' />
        <ShowButton />
      </Datagrid>
    </List>
  );
}
