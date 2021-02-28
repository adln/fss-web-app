import React from 'react';
import {Edit, SimpleForm, TextInput} from 'react-admin';

export const EvenementEdit = props => (
  <Edit {...props}>
      <SimpleForm>
          <TextInput source="type" />
          <TextInput source="action" />
          <TextInput source="num_mh" />
          <TextInput source="description" />
          <TextInput source="id" disabled/>
      </SimpleForm>
  </Edit>
);