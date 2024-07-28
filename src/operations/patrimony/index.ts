import PatrimonyCreate from '@/operations/patrimony/PatrimonyCreate.tsx';
import PatrimonyEdit from '@/operations/patrimony/PatrimonyEdit.tsx';
import PatrimonyList from '@/operations/patrimony/PatrimonyList.tsx';
import PatrimonyShow from '@/operations/patrimony/PatrimonyShow.tsx';

const patrimony = {
  list: PatrimonyList,
  show: PatrimonyShow,
  edit: PatrimonyEdit,
  create: PatrimonyCreate,
};

export default patrimony;
