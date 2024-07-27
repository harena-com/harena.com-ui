import {
  DateField,
  RichTextField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";

export default function PatrimonyShow() {
  return (
    <Show>
      <SimpleShowLayout>
        <TextField source="title" />
        <TextField source="teaser" />
        <RichTextField source="body" />
        <DateField label="Publication date" source="published_at" />
      </SimpleShowLayout>
    </Show>
  );
}
