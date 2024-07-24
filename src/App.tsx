import {Admin, Resource} from "react-admin";
import {dataProvider} from "@/providers/dataProvider.ts";

export default function App() {
  return (
    <Admin title="Harena Admin" dataProvider={dataProvider}>
      <Resource name="patrimony" />
    </Admin>
  );
}
