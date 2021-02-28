import React from 'react';
import { Show, SimpleShowLayout, TextField } from 'react-admin';
import {TitleShowSites} from './_partials/Title';
export const SiteShow = props => (
	<Show {...props} title={<TitleShowSites />}>
			<SimpleShowLayout>
					<TextField source="nom" />
					<TextField source="description" />
					<TextField source="adresse" />
					<TextField source="telephone" />
					<TextField source="id" />
			</SimpleShowLayout>
	</Show>
);
