import { usePatrimonyStore } from '@/store/usePatrimoineStore.ts';
import { Possession } from '@harena-com/typescript-client';
import { Button, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { DateInput, NumberInput, SimpleForm, TextInput, required, useNotify } from 'react-admin';
import { useNavigate } from 'react-router-dom';

const baseUrl = import.meta.env.VITE_HARENA_COM_API;

const CustomToolbar = (props: any) => <Toolbar {...props}></Toolbar>;

export default function PossessionCreate() {
  const patrimonyName = usePatrimonyStore((state) => state.patrimonyId);
  const notify = useNotify();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (!patrimonyName) {
    return <h1>Please provide patrimony name</h1>;
  }

  const handleSubmit = async (data: Possession) => {
    setLoading(true);
    try {
      await axios.put(`${baseUrl}/patrimoines/${patrimonyName}/possessions`, data);
      notify('Possession created successfully');
      navigate(`/possession`);
    } catch (error) {
      notify('Error creating possession');
      console.error(error);
      console.log(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Typography variant='h5' fontWeight={600}>
        Create new possession here 🇲🇬
      </Typography>
      <SimpleForm onSubmit={handleSubmit} toolbar={<CustomToolbar />}>
        <DateInput source='t' label='Date' fullWidth validate={required()} />
        <TextInput source='nom' label='Name' fullWidth validate={required()} />
        <NumberInput source='valeur_comptable' label='Book Value' fullWidth validate={required()} />
        <TextInput source='devise.nom' label='Currency Name' fullWidth validate={required()} />
        <TextInput source='devise.code' label='Currency Code' fullWidth validate={required()} />
        <Button type='submit' variant='contained' color='primary' disabled={loading}>
          Create
        </Button>
      </SimpleForm>
    </>
  );
}
