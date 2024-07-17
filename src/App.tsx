import {Admin, ListGuesser, Resource} from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

export default function App() {
    return (
        <Admin dataProvider={dataProvider}>
            <Resource name="posts" list={ListGuesser}/>
            <Resource name="comments" list={ListGuesser}/>
        </Admin>
    );
}
