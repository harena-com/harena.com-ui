import { baseUrl } from '@/utils/axios.ts';

import { usePatrimonyStore } from '@/store/usePatrimoineStore.ts';
import { Button, Toolbar, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { DateInput, Edit, NumberInput, SimpleForm, TextInput, required, useNotify } from 'react-admin';
import { useNavigate, useParams } from 'react-router-dom';

interface CustomToolbarProps {
  handleSave: (data: unknown) => Promise<void>;
  handleDelete: () => void;
  loading: boolean;
}

const CustomToolbar: React.FC<CustomToolbarProps> = ({ handleSave, handleDelete, loading }) => (
  <Toolbar sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
    <Button onClick={handleSave} variant='contained' color='primary' disabled={loading}>
      Save
    </Button>
    <Button onClick={handleDelete} variant='contained' color='error' disabled={loading}>
      Delete
    </Button>
  </Toolbar>
);

export default function PossessionEdit() {
  const patrimonyName = usePatrimonyStore((state) => state.patrimonyId);
  const { id } = useParams();
  const notify = useNotify();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  if (!patrimonyName) {
    return <h1>Please provide patrimony name</h1>;
  }

  const handleSave = async (data: unknown) => {
    console.log(data);
    setLoading(true);
    try {
      await axios.put(`${baseUrl}/patrimoines/${patrimonyName}/possessions`, data);
      notify('Possession saved successfully');
      navigate(`/possessions`);
    } catch (error) {
      notify('Error saving possession');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(`${baseUrl}/patrimoines/${patrimonyName}/possessions/${id}`);
      notify('Possession deleted successfully');
      navigate(`/possessions`);
    } catch (error) {
      notify('Error deleting possession');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Typography variant='h5' fontWeight={600}>
        Edit possession here 🇲🇬
      </Typography>
      <Edit id={id} queryOptions={{ meta: { patrimonyName } }}>
        <SimpleForm toolbar={<CustomToolbar handleSave={handleSave} handleDelete={handleDelete} loading={loading} />}>
          <DateInput source='t' label='Date' fullWidth validate={required()} />
          <TextInput source='nom' label='Name' fullWidth validate={required()} />
          <NumberInput source='valeur_comptable' label='Book Value' fullWidth validate={required()} />
          <TextInput source='devise.nom' label='Currency Name' fullWidth validate={required()} />
          <TextInput source='devise.code' label='Currency Code' fullWidth validate={required()} />
        </SimpleForm>
      </Edit>
    </>
  );
}
