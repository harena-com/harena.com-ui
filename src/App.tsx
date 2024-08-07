import { dataProvider } from '@/providers/dataProvider.ts';

import futureProjection from '@/operations/futureProjection';
import patrimony from '@/operations/patrimony';
import possession from '@/operations/possession';

import { Layout } from '@/layout';
import { defaultTheme } from '@/themes';
import { AccountBalance, Inventory, Timeline } from '@mui/icons-material';
import { Admin, Resource } from 'react-admin';

export default function App() {
  return (
    <Admin title='Harena Admin' layout={Layout} theme={defaultTheme} dataProvider={dataProvider}>
      <Resource {...patrimony} icon={AccountBalance} />
      <Resource {...possession} icon={Inventory} />
      <Resource name='futureProjection' {...futureProjection} icon={Timeline} />
    </Admin>
  );
}
