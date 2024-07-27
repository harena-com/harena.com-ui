import {
  Create,
  DateInput,
  NumberInput,
  required,
  SimpleForm,
  TextInput,
} from "react-admin";
import {numberValidator} from "@/operations/patrimoine/utils/numberValidator.ts";

export default function PatrimonyCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput name="nom" source="nom" validate={[required()]} />
        <TextInput
          name="possesseur"
          source="possesseur.nom"
          validate={[required()]}
        />
        <DateInput name="date t" source="t" validate={[required()]} />
        <NumberInput
          name="valeur comptable"
          source="valeur_comptable"
          validate={[required(), numberValidator]}
          parse={Number}
        />
      </SimpleForm>
    </Create>
  );
}
