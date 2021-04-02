import React from 'react';
import { List, Datagrid, TextField, Filter, TextInput, ImageField } from 'react-admin';
import makeStyle from '@material-ui/styles/makeStyles'
import { ColorField } from 'react-admin-color-input';
const logo_styles = makeStyle(theme=>({
	image: {
		height: 70
	}
}))

export const SiteList = (props) => {
const logo_class = logo_styles();
	return (
	<List {...props} filters={
		<Filter {...props}>
			<TextInput label="Recherche" source="q" alwaysOn />
		</Filter>
	} >
		<Datagrid rowClick="show">
			<TextField source="nom" />
			<TextField source="telephone" />
			<TextField source="adresse" />
			<ImageField source="logo" classes={logo_class}/>
			<ColorField source="color" />
		</Datagrid>
	</List>
)};
