import {
  DateField,
  NumberField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export default function PatrimonyShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="nom" label="Nom" />
        <TextField source="possesseur.nom" label="Nom du Possesseur" />
        <DateField source="t" label="Date" />
        <NumberField source="valeur_comptable" label="Valeur Comptable" />
      </SimpleShowLayout>
    </Show>
  );
}
