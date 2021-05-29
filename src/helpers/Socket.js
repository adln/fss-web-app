import React from 'react';
import { useSnackbar } from 'notistack';
import { Button } from '@material-ui/core';
import io from 'socket.io-client';
import moment from 'moment';
import fr from 'moment/locale/fr';
import HOST from './HOST';
moment.updateLocale(fr)

const socket = io.connect(HOST.URL);
// const socket = io.connect('https://fluiday.livraison360.xyz');

function Socket(props) {
	let { enqueueSnackbar } = useSnackbar();

	socket.on('connect', function () {
		console.log('connect');
	});

	socket.on('NEW_EVENT', function (data) {
		
		enqueueSnackbar(moment(data.date).fromNow() + ' - Nouvel événement arrivé', {
			variant: 'success',
			anchorOrigin: {
				vertical: 'bottom',
				horizontal: 'right'
			},
			action: () => {
				
				return (
					<Button href={"#/evenements/" + data.obj._id + '/show'} variant="text">
						Afficher
					</Button>
				);
			}
		});
	});
	socket.on('disconnect', function () {
		console.log('disconnect');
	});

	return <span></span>;
}

export default Socket;
