import { renderMoney } from '@/operations/common/utils/renderMoney.ts';

import { CreateButton, Datagrid, DateField, FunctionField, List, TextField, TopToolbar } from 'react-admin';

const PossessionListActions = () => {
  return (
    <TopToolbar>
      <CreateButton />
    </TopToolbar>
  );
};

export default function PossessionList({ patrimonyName }: { patrimonyName: string }) {
  return (
    <List resource='possession' actions={<PossessionListActions />} queryOptions={{ meta: { patrimonyName } }}>
      <Datagrid bulkActionButtons={false}>
        <DateField source='t' label='Date T' />
        <TextField source='nom' label='nom' />
        <FunctionField render={(possession) => renderMoney(possession.valeur_comptable)} label='Valeur Comptable' />
        <FunctionField render={(possession) => possession.devise.nom} label='Devise' />
      </Datagrid>
    </List>
  );
}
