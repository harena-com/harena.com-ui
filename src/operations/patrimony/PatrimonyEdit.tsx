import { Toolbar, Typography } from '@mui/material';
import {
  DateInput,
  Edit,
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

export default function PatrimonyEdit() {
  return (
    <>
      <Typography variant='h5' fontWeight={600}>
        Edit patrimony here 🇲🇬
      </Typography>
      <Edit resource='patrimony' title='Edit patrimony'>
        <SimpleForm toolbar={<PatrimonyEditToolbar />}>
          <TextInput
            label='Patrimony Name'
            fullWidth
            source='nom'
            validate={[required(), minLength(2), maxLength(100), regex(/^[A-Za-z\s]+$/, 'Must be a valid name')]}
          />
          <DateInput label='Timestamp' fullWidth source='t' validate={required()} />
          <TextInput
            label='Possessor'
            fullWidth
            source='possesseur.nom'
            validate={[required(), minLength(2), maxLength(100), regex(/^[A-Za-z\s]+$/, 'Must be a valid name')]}
          />
          <NumberInput
            label='Book Value'
            fullWidth
            source='valeur_comptable'
            validate={[required(), number('Must be a number')]}
          />
        </SimpleForm>
      </Edit>
    </>
  );
}
