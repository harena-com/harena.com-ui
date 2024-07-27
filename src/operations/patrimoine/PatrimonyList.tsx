import {
  CreateButton,
  Datagrid,
  DateField,
  FunctionField,
  List,
  TextField,
  TopToolbar,
} from "react-admin";
import {renderMoney} from "@/lib/utils.ts";

const PatrimonyListActions = () => {
  return (
    <TopToolbar>
      <CreateButton />
    </TopToolbar>
  );
};

export default function PatrimonyList() {
  return (
    <List actions={<PatrimonyListActions />}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="nom" label="Nom" />
        <TextField source="possesseur.nom" label="Possesseur" />
        <DateField source="t" label="Date T" />
        <FunctionField
          render={(patrimony) => renderMoney(patrimony.valeur_comptable)}
          label="Valeur Comptable"
        />
      </Datagrid>
    </List>
  );
}
