import { usePatrimonyStore } from '@/store/usePatrimoineStore.ts';
import { DateInput, Edit, NumberInput, SimpleForm, TextInput, required } from 'react-admin';
import { useParams } from 'react-router-dom';

export default function PossessionEdit() {
  const patrimonyName = usePatrimonyStore((state) => state.patrimonyId);
  const { id } = useParams();

  return (
    <Edit id={id} queryOptions={{ meta: { patrimonyName } }}>
      <SimpleForm>
        <DateInput fullWidth source='t' name='Date T' validate={required()} />
        <TextInput fullWidth source='nom' name='Nom' validate={required()} />
        <NumberInput fullWidth source='valeur_comptable' name='Valeur Comptable' validate={required()} />
        <TextInput fullWidth source='devise.nom' name='Nome devise' validate={required()} />
      </SimpleForm>
    </Edit>
  );
}
