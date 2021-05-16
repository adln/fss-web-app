import React from 'react';
import { Datagrid, Filter, FunctionField, List, ReferenceField, TextField, TextInput } from 'react-admin';
import moment from 'moment';
import { Link, Box } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import withStyles from '@material-ui/core/styles/withStyles';
const filterStyles = {
	status: { width: 150 }
};
const VacationFilter = withStyles(filterStyles)(({ classes, ...props }) => (
	<Filter {...props}>
		<TextInput label="Recherche" source="q" alwaysOn />
	</Filter>
));

export const VacationList = (props) => (
	<List
		{...props}
		filterDefaultValues={{ role: 'admin' }}
		sort={{ field: 'fin', order: 'DESC' }}
		perPage={25}
		filters={<VacationFilter />}
	>
		<Datagrid>
			<ReferenceField source="agent_id" reference="agents">
				<FunctionField render={(record) => record.nom + ' ' + record.prenom} />
			</ReferenceField>
			<FunctionField
				label="Début"
				render={(record) => {
					const link = record.geolocation_start ? (
						<Link
							target="_blank"
							href={`https://www.google.com/maps/search/?api=1&query=${record.geolocation_start.coords.latitude},${record.geolocation_start.coords.longitude}`}
						>
							<LocationOnIcon />
						</Link>
					) : (
						''
					);
					return (
						<Box style={{display: 'flex', alignItems: 'center'}}>
							<Box>{moment(record.debut).format('HH:mm:ss [le] DD-MM-YYYY')}</Box>
							<Box>{link}</Box>
						</Box>
					);
				}}
			/>
			<FunctionField
				label="Fin"
				render={(record) => {
					const link =
						record.geolocation_end && record.fin ? (
							<Link
								target="_blank"
								href={`https://www.google.com/maps/search/?api=1&query=${record.geolocation_end.coords.latitude},${record.geolocation_end.coords.longitude}`}
							>
								<LocationOnIcon />
							</Link>
						) : (
							''
						);
					return (
						<Box style={{display: 'flex', alignItems: 'center'}}>
							<Box>{record.fin ? moment(record.fin).format('HH:mm:ss [le] DD-MM-YYYY') : 'En Cours'}</Box>
							<Box>{link}</Box>
						</Box>
					);
				}}
			/>

			<ReferenceField source="site_id" reference="sites">
				<TextField source="nom" />
			</ReferenceField>
			<FunctionField
							label="Nombre de minutes"
							render={(record) =>
								record.fin
									? moment.duration(moment(record.fin).diff(moment(record.debut))).hours() +
									  ' Heures et ' +
									  moment.duration(moment(record.fin).diff(moment(record.debut))).minutes() +
									  ' Minutes'
									: 'En Cours'
							}
						/>
		</Datagrid>
	</List>
);
