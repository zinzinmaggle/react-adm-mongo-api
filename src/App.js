import * as React from "react";
import { Admin, Resource, ListGuesser, Edit } from 'react-admin'
import { Create, SimpleForm, TextInput } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:3000/api/');


export const UserCreate = (props) => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="id" />
          <TextInput source="name" />
      </SimpleForm>
  </Create>
);

export const UserEdit = (props) => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="id" />
          <TextInput source="name" />
      </SimpleForm>
  </Edit>
);

const App = () => (
  <Admin dataProvider={dataProvider}>
      <Resource name="user" create={UserCreate} edit={UserEdit} list={ListGuesser} />
  </Admin>
);

export default App;
