import React from 'react';
import {Edit, SimpleForm, TextInput} from 'react-admin';
import { TitleEditSites } from './_partials/Title';
import { ColorInput } from 'react-admin-color-input';
export const SiteEdit = props => (
  <Edit {...props} title={<TitleEditSites />}>
      <SimpleForm>
          
          <TextInput source="nom" />
          <TextInput source="description" />
          <TextInput source="adresse" />
          <TextInput source="telephone" />
          <ColorInput source="color" label="Couleur de l'éspace client" />
          <TextInput source="id" disabled/>
      </SimpleForm>
  </Edit>
);