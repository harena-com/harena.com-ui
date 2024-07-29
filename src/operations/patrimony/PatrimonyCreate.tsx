import {
  Create,
  DateInput,
  NumberInput,
  SimpleForm,
  TextInput,
  maxLength,
  minLength,
  number,
  regex,
  required,
} from 'react-admin';
import { useParams } from 'react-router-dom';

export default function PatrimonyCreate() {
  const { id } = useParams();

  return (
    <Create id={id} resource='patrimony'>
      <SimpleForm>
        <TextInput
          fullWidth
          source='nom'
          label='Nom'
          validate={[required(), minLength(2), maxLength(100), regex(/^[A-Za-z\s]+$/, 'Must be a valid name')]}
        />
        <DateInput fullWidth source='t' label='Date T' validate={required()} />
        <TextInput
          fullWidth
          source='possesseur.nom'
          label='Possesseur'
          validate={[required(), minLength(2), maxLength(100), regex(/^[A-Za-z\s]+$/, 'Must be a valid name')]}
        />
        <NumberInput
          fullWidth
          source='valeur_comptable'
          label='Valeur Comptable'
          validate={[required(), number('Must be a number')]}
        />
      </SimpleForm>
    </Create>
  );
}
