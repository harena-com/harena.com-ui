import { renderMoney } from '@/operations/common/utils/renderMoney.ts';
import { Pagination } from '@/operations/components/list.tsx';

import { usePatrimonyStore } from '@/store/usePatrimoineStore.ts';
import { Box } from '@mui/material';
import {
  CreateButton,
  Datagrid,
  DateField,
  EditButton,
  FunctionField,
  List,
  ShowButton,
  TextField,
  TopToolbar,
} from 'react-admin';

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
    <List
      title=' 🇲🇬 '
      resource='possession'
      actions={<PossessionListActions />}
      queryOptions={{ meta: { patrimonyName } }}
    >
      <Datagrid bulkActionButtons={false}>
        <DateField source='t' label='Date' />
        <TextField source='nom' label='Name' />
        <FunctionField render={(possession) => renderMoney(possession.valeur_comptable)} label='Book Value' />
        <FunctionField render={(possession) => possession.devise.nom} label='Currency Name' />
        <FunctionField render={(possession) => possession.devise.code} label='Currency Code' />
        <ShowButton />
        <EditButton />
        <ShowButton />
      </Datagrid>

      <Box mt={2}>
        <Pagination />
      </Box>
    </List>
  );
}
