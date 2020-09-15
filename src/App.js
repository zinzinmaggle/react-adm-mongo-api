import * as React from "react";
import { Admin, Resource, Edit } from 'react-admin'
import { Create, SimpleForm, TextInput } from 'react-admin';
import { List, Datagrid, TextField, EditButton } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('/api/');



export const UserList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);

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
      <Resource name="user" create={UserCreate} edit={UserEdit} list={UserList} />
  </Admin>
);

export default App;
