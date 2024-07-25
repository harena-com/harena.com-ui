import {Admin, Resource} from "react-admin";
import {dataProvider} from "@/providers/dataProvider.ts";
import {darkTheme, lightTheme} from "@/theme.ts";
import patrimony from "@/operations/patrimoine";
import possession from "@/operations/possession";

export default function App() {
  return (
    <Admin
      title="Harena Admin"
      dataProvider={dataProvider}
      defaultTheme="dark"
      lightTheme={lightTheme}
      darkTheme={darkTheme}
    >
      <Resource name="patrimony" {...patrimony} />
      <Resource name="possession" {...possession} />
    </Admin>
  );
}
