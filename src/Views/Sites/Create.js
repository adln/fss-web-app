import React from 'react';
import {Create, SimpleForm, TextInput} from 'react-admin';

export const SiteCreate = props => (
  <Create {...props}>
      <SimpleForm>
          
          <TextInput source="nom" />
          <TextInput source="description" />
          <TextInput source="adresse" />
          <TextInput source="telephone" />
          
          <TextInput source="id" disabled/>
      </SimpleForm>
  </Create>
);