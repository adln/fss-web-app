import * as React from 'react';
import { useSelector } from 'react-redux';
import { Layout, Sidebar } from 'react-admin';
import AppBar from './AppBar';
import Menu from './Menu';
import { darkTheme, lightTheme } from './theme';

const CustomSidebar = (props) => <Sidebar {...props} size={200} />;
const CustomLayout = (props) => {
	const theme = useSelector((state) => (state.theme === 'dark' ? darkTheme : lightTheme));
	return <Layout {...props} appBar={AppBar} sidebar={CustomSidebar} menu={Menu} theme={theme} />;
};
export default CustomLayout;
