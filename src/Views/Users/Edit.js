import React from 'react';
import {Edit, SimpleForm, TextInput} from 'react-admin';
import { TitleEditUsers } from './_partials/Title';

export const UserEdit = props => (
  <Edit {...props} title={<TitleEditUsers />}>
      <SimpleForm>
          <TextInput source="roles" />
          <TextInput source="username" />
          <TextInput source="password" />
          <TextInput source="id" disabled/>
      </SimpleForm>
  </Edit>
);