import { renderMoney } from '@/operations/common/utils/renderMoney.ts';
import { Pagination } from '@/operations/components/list.tsx';

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

const PatrimonyListActions = () => {
  return (
    <TopToolbar>
      <CreateButton variant={'contained'} sx={{ paddingY: 1, paddingX: 5, borderRadius: 3 }} />
    </TopToolbar>
  );
};

export default function PatrimonyList() {
  return (
    <List title='Patrimony List' resource='patrimony' actions={<PatrimonyListActions />}>
      <Datagrid bulkActionButtons={false}>
        <TextField source='nom' label='Patrimony Name' />
        <DateField source='t' label='Timestamp' />
        <TextField source='possesseur.nom' label='Possessor' />
        <FunctionField render={(patrimony) => renderMoney(patrimony.valeur_comptable)} label='Book Value' />
        <ShowButton />
        <EditButton />
      </Datagrid>

      <Box mt={2}>
        <Pagination />
      </Box>
    </List>
  );
}
