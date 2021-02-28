import React from 'react';
import {
	List,
	Datagrid,
	TextField,
	DateField,
	Filter,
	TextInput,
	BooleanInput,
	FunctionField
} from 'react-admin';
import Chip from '@material-ui/core/Chip';
export const EvenementList = (props) => (
	<List
		{...props}
		filters={
			<Filter {...props}>
				<TextInput label="Recherche" source="q" alwaysOn />
				<BooleanInput label="Urgent" source="urgent" alwaysOn />
			</Filter>
		}
	>
		<Datagrid rowClick="show">
			<FunctionField
				render={(record) => {
					return record.urgent ? (
						<Chip
							label="Urgent"
							color="secondary"
							style={{backgroundColor: 'red'}}
						/>
					) : (
						'non urgent'
					);
				}}
			/>
			<DateField source="createdAt" showTime locales="fr-FR" />
			<TextField source="type" />
			<TextField source="action" />
			<TextField source="description" />
		</Datagrid>
	</List>
);
