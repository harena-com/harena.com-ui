import { renderMoney } from '@/operations/common/utils/renderMoney.ts';

import { DateField, EditButton, FunctionField, Show, SimpleShowLayout, TextField, TopToolbar } from 'react-admin';
import { useParams } from 'react-router-dom';

const PossessionShowActions = () => {
  return (
    <TopToolbar>
      <EditButton />
    </TopToolbar>
  );
};

export default function PossessionShow() {
  const { id } = useParams();

  return (
    <Show id={id} actions={<PossessionShowActions />}>
      <SimpleShowLayout>
        <DateField source='t' label='Date T' />
        <TextField source='nom' label='Nom' />
        <FunctionField render={(possession) => renderMoney(possession.valeur_comptable)} label='Valeur Comptable' />
        <FunctionField render={(possession) => possession.devise.nom} label='Devise' />
      </SimpleShowLayout>
    </Show>
  );
}
