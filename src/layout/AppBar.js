import * as React from 'react';
import { forwardRef } from 'react';
import { AppBar, UserMenu, MenuItemLink, useTranslate } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import SettingsIcon from '@material-ui/icons/Settings';
import { makeStyles } from '@material-ui/core/styles';

// import Logo from './Logo';

const useStyles = makeStyles({
	title: {
		flex: 1,
		textOverflow: 'ellipsis',
		whiteSpace: 'nowrap',
		overflow: 'hidden'
	},
	spacer: {
		flex: 1
	}
});

const ConfigurationMenu = forwardRef((props, ref) => {
	const translate = useTranslate();
	return (
		<MenuItemLink
			ref={ref}
			to="/configuration"
			primaryText={translate('pos.configuration')}
			leftIcon={<SettingsIcon />}
			onClick={props.onClick}
			sidebarIsOpen
		/>
	);
});

const CustomUserMenu = (props) => (
	<UserMenu {...props}>
		
	</UserMenu>
);

const CustomAppBar = (props) => {
	const classes = useStyles();
	return (
		<AppBar {...props} elevation={1} userMenu={<CustomUserMenu />}>
			<Typography variant="h6" color="inherit" className={classes.title} id="react-admin-title" />

			<img src="/logo.png" alt="Logo FSS Security" style={{ height: '50px', margin: 5 }} />
			<Typography variant="h4" style={{marginLeft: 15, marginRight: 15}}>&</Typography>
			<img src="/otes.png" alt="Logo OTES" style={{ height: '50px', margin: 5 }} />

			<span className={classes.spacer} />
		</AppBar>
	);
};

export default CustomAppBar;
