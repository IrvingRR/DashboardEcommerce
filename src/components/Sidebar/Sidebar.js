import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore, faBox, faHome, faUser, faUsers, faTachometerAlt, faClipboard, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { SidebarContainer, Elements, Element, SidebarLink, Header, Logo } from './Styles';

const Sidebar = function ({reduceSidebar}) {

    return (
        <SidebarContainer reduceSidebar={reduceSidebar.toString()}>
            <Header>
                <Logo to="/" reduceSidebar={reduceSidebar.toString()}>
                    <FontAwesomeIcon icon={faStore} />
                    <span>Shopping</span>
                </Logo>
            </Header>
            <Elements>
                <Element>
                    <SidebarLink to="/" reduceSidebar={reduceSidebar.toString()} activeClassName="active">
                        <FontAwesomeIcon icon={faHome} />
                        <span>Home</span>
                    </SidebarLink>
                </Element>
                <Element>
                    <SidebarLink to="/dashboard" reduceSidebar={reduceSidebar.toString()}>
                        <FontAwesomeIcon icon={faTachometerAlt} />
                        <span>Dashboard</span>
                    </SidebarLink>
                </Element>
                <Element>
                    <SidebarLink to="/profile" reduceSidebar={reduceSidebar.toString()}>
                        <FontAwesomeIcon icon={faUser} />
                        <span>Profile</span>
                    </SidebarLink>
                </Element>
                <Element>
                    <SidebarLink to="/users" reduceSidebar={reduceSidebar.toString()}>
                        <FontAwesomeIcon icon={faUsers} />
                        <span>Users</span>
                    </SidebarLink>
                </Element>
                <Element>
                    <SidebarLink to="/products" reduceSidebar={reduceSidebar.toString()}>
                        <FontAwesomeIcon icon={faBox} />
                        <span>Products</span>
                    </SidebarLink>
                </Element>
                <Element>
                    <SidebarLink to="/orders" reduceSidebar={reduceSidebar.toString()}>
                        <FontAwesomeIcon icon={faClipboard} />
                        <span>Orders</span>
                    </SidebarLink>
                </Element>
                <Element>
                    <SidebarLink to="/messages" reduceSidebar={reduceSidebar.toString()}>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>Messages</span>
                    </SidebarLink>
                </Element>
            </Elements>
        </SidebarContainer>
    );
}

export default Sidebar;
