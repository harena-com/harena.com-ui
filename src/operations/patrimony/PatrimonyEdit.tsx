import { DateInput, Edit, NumberInput, SimpleForm, TextInput, required } from 'react-admin';

export default function PatrimonyEdit() {
  return (
    <Edit>
      <SimpleForm>
        <TextInput fullWidth source='nom' name='Nom' validate={required()} />
        <DateInput fullWidth source='t' name='Date T' validate={required()} />
        <TextInput fullWidth source='possesseur.nom' name='Possesseur' validate={required()} />
        <NumberInput fullWidth source='valeur_comptable' name='valeur' validate={required()} />
      </SimpleForm>
    </Edit>
  );
}
