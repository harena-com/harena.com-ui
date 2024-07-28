import { dataProvider } from '@/providers/dataProvider.ts';

import patrimony from '@/operations/patrimony';
import possession from '@/operations/possession';

import { usePatrimonyStore } from '@/store/usePatrimoineStore.ts';
import { Admin, Resource } from 'react-admin';

export default function App() {
  const patrimonyName = usePatrimonyStore((state) => state.patrimonyId);

  return (
    <Admin title='Harena Admin' dataProvider={dataProvider}>
      <Resource name='patrimony' {...patrimony} />
      {patrimonyName ? <Resource name='possession' {...possession} /> : <h1>No resource found</h1>}
    </Admin>
  );
}
