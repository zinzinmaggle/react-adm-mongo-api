import * as React from "react";
import { Admin, Resource, ListGuesser, EditGuesser } from 'react-admin'
import { Create, SimpleForm, TextInput } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://react-adm-mongo-api.vercel.app/api/');


export const UserCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="name" />
      </SimpleForm>
  </Create>
);

const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="users" create={UserCreate} edit={EditGuesser} list={ListGuesser} />
  </Admin>
);

export default App;
