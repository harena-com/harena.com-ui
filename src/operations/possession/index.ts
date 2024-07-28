import PossessionCreate from '@/operations/possession/PossessionCreate.tsx';
import PossessionEdit from '@/operations/possession/PossessionEdit.tsx';
import PossessionList from '@/operations/possession/PossessionList.tsx';
import PossessionShow from '@/operations/possession/PossessionShow.tsx';

const possession = {
  list: PossessionList,
  show: PossessionShow,
  create: PossessionCreate,
  edit: PossessionEdit,
  recordRepresentation: 'nom',
};

export default possession;
