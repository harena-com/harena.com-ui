import { renderMoney } from '@/operations/common/utils/renderMoney.ts';
import { ShowLayout } from '@/operations/components/show.tsx';
import PossessionList from '@/operations/possession/PossessionList.tsx';

import { usePatrimonyStore } from '@/store/usePatrimoineStore.ts';
import { Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { DateField, FunctionField, Show, TextField } from 'react-admin';
import { useParams } from 'react-router-dom';

export default function PatrimonyShow() {
  const { id } = useParams();
  const setPatrimonyId = usePatrimonyStore((state) => state.setPatrimonyId);

  useEffect(() => {
    if (id) {
      setPatrimonyId(id);
    }
  }, [id, setPatrimonyId]);

  if (!id) {
    return <h1>Patrimony identifier not found</h1>;
  }

  return (
    <>
      <Typography variant={'h5'} fontWeight={600}>
        Patrimony details
      </Typography>

      <Show sx={{ marginBottom: 10 }} resource='patrimony' id={id}>
        <ShowLayout>
          <Grid container paddingY={5} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Typography fontWeight={500} color={'gray'}>
                Patrimony Name :
              </Typography>
              <TextField source='nom' />
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight={500} color={'gray'}>
                Timestamp :
              </Typography>
              <DateField source='t' />
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight={500} color={'gray'}>
                Possessor :
              </Typography>
              <TextField source='possesseur.nom' label='Possesseur' />
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight={500} color={'gray'}>
                Book Value :
              </Typography>
              <FunctionField render={(patrimony) => renderMoney(patrimony.valeur_comptable)} label='Valeur Comptable' />
            </Grid>
          </Grid>
        </ShowLayout>
      </Show>
      <Typography variant={'h5'} fontWeight={600}>
        Possessions from this patrimony
      </Typography>
      <PossessionList />
    </>
  );
}
