import React from 'react';
import { Create, FormTab, ImageField, ImageInput, TabbedForm, TextInput } from 'react-admin';

export const SiteCreate = (props) => (
	<Create {...props}>
		<TabbedForm>
			<FormTab label="Informations">
				<TextInput source="nom" />
				<TextInput source="description" />
				<TextInput source="adresse" />
				<TextInput source="telephone" />
				<TextInput source="id" disabled />
			</FormTab>
			<FormTab label="Logo">
				<ImageInput source="logo" label="Logo du Site" accept="image/*" multiple={false}>
					<ImageField source="src" title="title" />
				</ImageInput>
			</FormTab>
		</TabbedForm>
	</Create>
);
