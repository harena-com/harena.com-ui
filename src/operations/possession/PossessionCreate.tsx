import { usePatrimonyStore } from '@/store/usePatrimoineStore.ts';
import { Create, DateInput, NumberInput, SimpleForm, TextInput, required } from 'react-admin';
import { useParams } from 'react-router-dom';

export default function PossessionCreate() {
  const patrimonyName = usePatrimonyStore((state) => state.patrimonyId);

  const { id } = useParams();

  if (!patrimonyName) {
    return <h1>Please provide patrimony Name</h1>;
  }

  return (
    <Create id={id}>
      <SimpleForm>
        <DateInput fullWidth source='t' name='Date T' validate={required()} />
        <TextInput fullWidth source='nom' name='Nom' validate={required()} />
        <NumberInput fullWidth source='valeur_comptable' name='Valeur Comptable' validate={required()} />
        <TextInput fullWidth source='devise.nom' name='Nom devise' validate={required()} />
      </SimpleForm>
    </Create>
  );
}
