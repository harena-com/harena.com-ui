import { Toolbar, Typography } from '@mui/material';
import {
  Create,
  DateInput,
  NumberInput,
  SaveButton,
  SimpleForm,
  TextInput,
  maxLength,
  minLength,
  number,
  regex,
  required,
} from 'react-admin';

const PatrimonyEditToolbar = () => (
  <Toolbar>
    <SaveButton />
  </Toolbar>
);

export default function PatrimonyCreate() {
  return (
    <>
      <Typography variant='h5' fontWeight={600}>
        Create new patrimony here 🇲🇬
      </Typography>
      <Create title='' resource='patrimony'>
        <SimpleForm toolbar={<PatrimonyEditToolbar />}>
          <TextInput
            fullWidth
            source='nom'
            label='Patrimony name'
            validate={[required(), minLength(2), maxLength(100), regex(/^[A-Za-z\s]+$/, 'Must be a valid name')]}
          />
          <DateInput fullWidth source='t' label='Timestamp' validate={required()} />
          <TextInput
            fullWidth
            source='possesseur.nom'
            label='Possessor'
            validate={[required(), minLength(2), maxLength(100), regex(/^[A-Za-z\s]+$/, 'Must be a valid name')]}
          />
          <NumberInput
            fullWidth
            source='valeur_comptable'
            label='Book value'
            validate={[required(), number('Must be a number')]}
          />
        </SimpleForm>
      </Create>
    </>
  );
}
