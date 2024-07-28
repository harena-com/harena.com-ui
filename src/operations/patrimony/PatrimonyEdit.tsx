import { DateInput, Edit, NumberInput, SimpleForm, TextInput, required } from 'react-admin';
import { useParams } from 'react-router-dom';

export default function PatrimonyEdit() {
  const { id } = useParams();

  return (
    <Edit id={id}>
      <SimpleForm>
        <TextInput fullWidth source='nom' name='Nom' validate={required()} />
        <DateInput fullWidth source='t' name='Date T' validate={required()} />
        <TextInput fullWidth source='possesseur.nom' name='Possesseur' validate={required()} />
        <NumberInput fullWidth source='valeur_comptable' name='valeur' validate={required()} />
      </SimpleForm>
    </Edit>
  );
}
