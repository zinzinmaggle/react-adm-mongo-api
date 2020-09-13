import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://react-adm-mongo-api.vercel.app/api/');

const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} />
  </Admin>
);

export default App;
