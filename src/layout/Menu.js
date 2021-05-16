import * as React from 'react';
import { useSelector } from 'react-redux';
import {  Box } from '@material-ui/core';
import {
    useTranslate,
    DashboardMenuItem,
    MenuItemLink
} from 'react-admin';
import evenements from '../Views/Evenements';
import sites from '../Views/Sites';
import agents from '../Views/Agents';
import users from '../Views/Users';
import vacations from '../Views/Vacations';




const Menu = ({ onMenuClick, logout, dense = false }) => {
    const translate = useTranslate();
    
    const open = useSelector((state) => state.admin.ui.sidebarOpen);
    useSelector((state) => state.theme); // force rerender on theme change

    

    return (
        <Box mt={1}>
            {' '}
            <DashboardMenuItem onClick={onMenuClick} sidebarIsOpen={false} />
            
            <MenuItemLink
                to={`/evenements`}
                primaryText={translate(`resources.evenements.name`, {
                    smart_count: 2,
                })}
                leftIcon={<evenements.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/sites`}
                primaryText={translate(`resources.sites.name`, {
                    smart_count: 2,
                })}
                leftIcon={<sites.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/agents`}
                primaryText={translate(`resources.agents.name`, {
                    smart_count: 2,
                })}
                leftIcon={<agents.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/vacations`}
                primaryText={translate(`resources.vacations.name`, {
                    smart_count: 2,
                })}
                leftIcon={<vacations.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            <MenuItemLink
                to={`/users`}
                primaryText={translate(`resources.users.name`, {
                    smart_count: 2,
                })}
                leftIcon={<users.icon />}
                onClick={onMenuClick}
                sidebarIsOpen={open}
                dense={dense}
            />
            {/* {logout} */}
        </Box>
    );
};

export default Menu;