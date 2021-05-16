import React from 'react';
import {
	Datagrid,
	TextField,
	DateField,
	FunctionField,
	ReferenceField,
	AutocompleteInput,
	Filter,
	TextInput,
	List,
	ReferenceArrayInput
} from 'react-admin';
import Chip from '@material-ui/core/Chip';
import { Box, Typography } from '@material-ui/core';

const EventPanel = ({ id, record, resource }) => (
	<Box>
		{record.action && (
			<>
				<Typography variant="caption">Action</Typography>
				<Typography variant="body1" style={{ padding: 10 }}>
					{record.action}
				</Typography>
			</>
		)}

		<Typography variant="caption">Déscription</Typography>
		<Typography variant="body1" style={{ padding: 10 }}>
			{record.description}
		</Typography>
	</Box>
);

const EventsFilter = (props) => (
	<Filter {...props}>
		<TextInput label="Recherche" source="q" alwaysOn />
		<ReferenceArrayInput label="Site" source="site_id" reference="sites" alwaysOn>
			<AutocompleteInput optionText="nom" alwaysOn outline />
		</ReferenceArrayInput>
		<ReferenceArrayInput label="Agent" source="agent_id" reference="agents" alwaysOn>
			<AutocompleteInput optionText={(record) => record.nom && record.nom + ' ' + record.prenom} alwaysOn />
		</ReferenceArrayInput>
	</Filter>
);

export const EvenementList = (props) => {
	return (
		<List perPage={20} filters={<EventsFilter />} {...props}>
			<Datagrid rowClick="show" optimized expand={EventPanel}>
				<FunctionField
					render={(record) => {
						return record.urgent ? (
							<Chip label="Urgent" color="secondary" style={{ backgroundColor: 'red' }} />
						) : (
							'non urgent'
						);
					}}
				/>
				<DateField source="createdAt" showTime locales="fr-FR" label="Créé à" link="show"/>
				<ReferenceField label="Site" source="site_id" reference="sites">
					<TextField source="nom" />
				</ReferenceField>
				<ReferenceField label="Agent" source="agent_id" reference="agents" link="show">
					<FunctionField label="Agent" render={(record) => record.nom + ' ' + record.prenom} />
				</ReferenceField>
				<TextField source="type" />
			</Datagrid>
		</List>
	);
};
