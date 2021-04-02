import React from 'react';
import {Create, SimpleForm, TextInput} from 'react-admin';

export const NotesCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput source="type" />
          <TextInput source="action" />
          <TextInput source="num_mh" />
          <TextInput source="description" />
      </SimpleForm>
  </Create>
);