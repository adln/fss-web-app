import React from 'react';
import {Edit, SimpleForm, TextInput} from 'react-admin';
import { TitleEditSites } from './_partials/Title';

export const SiteEdit = props => (
  <Edit {...props} title={<TitleEditSites />}>
      <SimpleForm>
          
          <TextInput source="nom" />
          <TextInput source="description" />
          <TextInput source="adresse" />
          <TextInput source="telephone" />
          
          <TextInput source="id" disabled/>
      </SimpleForm>
  </Edit>
);