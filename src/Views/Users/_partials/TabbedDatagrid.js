import React, { Component } from 'react';
import { Fragment } from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Divider from '@material-ui/core/Divider';
import { Datagrid, FunctionField, ReferenceField, Responsive, TextField } from 'ra-ui-materialui';
export class TabbedDatagrid extends Component {
	tabs = [
		{ id: 'admin', name: 'Administrateur' },
		{ id: 'agent', name: 'Agents' },
		{ id: 'client', name: 'Sites' }
	];

	state = { administrateur: [], agents: [], sites: [] };

	static getDerivedStateFromProps(props, state) {
		if (props.ids !== state[props.filterValues.role]) {
			return { ...state, [props.filterValues.role]: props.ids };
		}
		return null;
	}

	handleChange = (event, value) => {
		const { filterValues, setFilters } = this.props;
		setFilters({ ...filterValues, role: value });
	};

	render() {
		const { classes, filterValues, ...props } = this.props;
		return (
			<Fragment>
				<Tabs
					
          variant="fullWidth"
					style={{justifyContent: 'space-evenly'}}
					value={filterValues.role}
					indicatorColor="primary"
					onChange={this.handleChange}
				>
					{this.tabs.map((choice) => (
						<Tab key={choice.id} label={choice.name} value={choice.id} />
					))}
				</Tabs>
				<Divider />
				<Responsive
					medium={
						<div>
							{filterValues.role === 'admin' && (
								<Datagrid {...props} ids={this.state['ordered']} rowClick="show">
									<TextField source="username" />
									<TextField source="role" />
									<ReferenceField label="Compte Site" source="linked_account" reference="sites" link="show">
										<TextField source="nom" />
									</ReferenceField>
									<ReferenceField label="Compte Agent" source="linked_account" reference="agents" link="show">
										<FunctionField render={(record) => record.nom + ' ' + record.prenom} />
									</ReferenceField>
								</Datagrid>
							)}
							{filterValues.role === 'agent' && (
								<Datagrid {...props} ids={this.state['delivered']} rowClick="show" >
									<TextField source="username" />
									<TextField source="role" />
									<ReferenceField label="Agent lié" source="linked_account" reference="agents" link="show">
										<FunctionField render={(record) => record.nom + ' ' + record.prenom} />
									</ReferenceField>
								</Datagrid>
							)}
							{filterValues.role === 'client' && (
								<Datagrid {...props} ids={this.state['cancelled']} rowClick="show">
									<TextField source="username" />
									<TextField source="role" />
									<ReferenceField label="Site lié" source="linked_account" reference="sites" link="show">
										<TextField source="nom" />
									</ReferenceField>
								</Datagrid>
							)}
						</div>
					}
				/>
			</Fragment>
		);
	}
}
