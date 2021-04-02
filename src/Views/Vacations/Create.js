import React, { useEffect, useState } from 'react';
import {
	AutocompleteInput,
	Create,
	Error,
	Loading,
	SelectInput,
	SimpleForm,
	TextInput,
	useDataProvider
} from 'react-admin';
import { useFormState } from 'react-final-form';
export const VacationInput = (props) => {
	const dataProvider = useDataProvider();
	const [data, setData] = useState([]);
	const { values } = useFormState();
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState();
	useEffect(() => {
		if (values.role === 'agent') {
			console.log('load agent');
			dataProvider
				.getList('agents', {
					pagination: { page: 1, perPage: 100 },
					sort: { field: 'nom', order: 'DESC' }
				})
				.then(({ data }) => {
					console.log('loaded agents', data);
					let agents = data.map((agent) => ({ id: agent.id, name: agent.nom + ' ' + agent.prenom }));
					setData(agents);
					setLoading(false);
				})
				.catch((error) => {
					setError(error);
					setLoading(false);
				});
		}
		if (values.role === 'client') {
			console.log('load client');

			dataProvider
				.getList('sites', {
					pagination: { page: 1, perPage: 100 },
					sort: { field: 'nom', order: 'DESC' }
				})
				.then(({ data }) => {
					let sites = data.map((site) => ({ id: site.id, name: site.nom }));
					setData(sites);
					setLoading(false);
				})
				.catch((error) => {
					console.log('ERR', error);
					setError(error);
					setLoading(false);
				});
		}
	}, [values.role, dataProvider]);
	if (!values.role) return null;
	if (loading) return <Loading />;
	if (error) return <Error />;

	return ['agent', 'client'].includes(values.role) && <AutocompleteInput choices={data} {...props} />;
};



export const VacationCreate = (props) => (
	<Create {...props}>
		<SimpleForm>
			<SelectInput
				source="role"
				choices={[
					{ id: 'admin', name: 'Administrateur' },
					{ id: 'agent', name: 'Agent' },
					{ id: 'client', name: 'Client' }
				]}
			/>

			<VacationInput source="linked_account" label="Compte lié" />
			<TextInput source="username" label="Nom d'utilisateur" />
			<TextInput source="password" label="Mot de passe" />
			<TextInput source="id" disabled />
		</SimpleForm>
	</Create>
);
