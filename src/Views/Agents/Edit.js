import React from 'react';
import {Edit, SimpleForm, TextInput} from 'react-admin';
import { TitleEditAgents } from './_partials/Title';

export const AgentEdit = props => (
  <Edit {...props} title={<TitleEditAgents />}>
      <SimpleForm>
          <TextInput source="nom" />
          <TextInput source="prenom" />
          <TextInput source="adresse" />
          <TextInput source="telephone1" />
          <TextInput source="id" disabled/>
      </SimpleForm>
  </Edit>
);