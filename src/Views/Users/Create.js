import React from 'react';
import {Create, SimpleForm, TextInput} from 'react-admin';

export const UserCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="roles" />
          <TextInput source="username" />
          <TextInput source="password" />
          <TextInput source="id" disabled/>
      </SimpleForm>
  </Create>
);