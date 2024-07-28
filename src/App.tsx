import { dataProvider } from '@/providers/dataProvider.ts';

import futureProjection from '@/operations/futureProjection';
import patrimony from '@/operations/patrimony';
import possession from '@/operations/possession';

import { Admin, Resource } from 'react-admin';

export default function App() {
  return (
    <Admin title='Harena Admin' dataProvider={dataProvider}>
      <Resource name='patrimony' {...patrimony} />
      <Resource name='possession' {...possession} />
      <Resource name='futureProjection' {...futureProjection} />
    </Admin>
  );
}
