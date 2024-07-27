import PatrimonyList from "@/operations/patrimoine/PatrimonyList.tsx";
import PatrimonyCreate from "@/operations/patrimoine/PatrimonyCreate.tsx";
import PatrimonyShow from "@/operations/patrimoine/PatrimonyShow.tsx";

const patrimony = {
  list: <PatrimonyList />,
  show: <PatrimonyShow />,
  create: <PatrimonyCreate />,
};

export default patrimony;
