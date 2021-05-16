import React from 'react';
import {Edit, FormTab, ImageField, ImageInput, TabbedForm, TextInput} from 'react-admin';
import { TitleEditSites } from './_partials/Title';
import { ColorInput } from 'react-admin-color-input';
export const SiteEdit = ({hasEdit, ...props}) => (
  <Edit  {...props} title={<TitleEditSites />}>
      <TabbedForm>
			<FormTab label="Informations">
				<TextInput source="nom" />
				<TextInput source="description" />
				<TextInput source="adresse" />
				<TextInput source="telephone" />
        <ColorInput source="color" />
				<TextInput source="id" disabled />
			</FormTab>
			<FormTab label="Logo">
        <ImageField source="logo" label="Logo Actuel" />
				<ImageInput source="logo" label="Nouveau Logo" accept="image/*" multiple={false}>
					<ImageField source="src" title="title" />
				</ImageInput>
			</FormTab>
		</TabbedForm>
  </Edit>
);