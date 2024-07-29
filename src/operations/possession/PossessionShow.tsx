import { renderMoney } from '@/operations/common/utils/renderMoney.ts';
import { ShowLayout } from '@/operations/components/show.tsx';

import { usePatrimonyStore } from '@/store/usePatrimoineStore.ts';
import { Grid, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import { DateField, DeleteButton, EditButton, FunctionField, Show, TopToolbar } from 'react-admin';
import { useParams } from 'react-router-dom';

const PossessionShowActions = () => {
  return (
    <TopToolbar>
      <EditButton />
    </TopToolbar>
  );
};

export default function PossessionShow() {
  const { id } = useParams();
  const patrimonyName = usePatrimonyStore((state) => state.patrimonyId);

  return (
    <>
      <Typography variant='h5' fontWeight={600}>
        Possession details 🇲🇬
      </Typography>
      <Show
        id={id}
        sx={{ marginBottom: 10 }}
        actions={<PossessionShowActions />}
        queryOptions={{ meta: { patrimonyName } }}
        title=' '
      >
        <ShowLayout>
          <Grid container paddingY={5} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Typography fontWeight={500} color='gray'>
                Date:
              </Typography>
              <DateField source='t' />
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight={500} color='gray'>
                Possession Name:
              </Typography>
              <DateField source='nom' />
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight={500} color='gray'>
                Book value:
              </Typography>
              <FunctionField render={(possession) => renderMoney(possession.valeur_comptable)} />
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight={500} color='gray'>
                Currency name:
              </Typography>
              <FunctionField render={(possession) => possession.devise.nom} />
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight={500} color='gray'>
                Currency code:
              </Typography>
              <FunctionField render={(possession) => possession.devise.code} />
            </Grid>
          </Grid>
          <DeleteButton sx={{ backgroundColor: red }} variant={'contained'} />
        </ShowLayout>
      </Show>
    </>
  );
}
