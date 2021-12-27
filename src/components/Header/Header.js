import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch, faAngleDown,faBell, faEnvelope, faClipboardCheck,
faUser, faCog, faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { Form, FormGroupInput, FormInput } from '../Form/Styles';
import Modal from '../Modal/Modal';
import {
    Container,
    SidebarToggle,
    Group,
    Image,
    ButtonIcon,
    Text,
    NotificationNumber, Notifications, NotificationsHeader, Notification, NotificationTitle,
    UserOptions, Option
} from './Styles';

const Header = function({reduceSidebar, setReduceSidebar}) {

    const [showNotifications, setShowNotifications] = useState(false);
    const [showUserOptions, setShowUserOptions] = useState(false);
    const [notifications, setNotifications] = useState(500);
    const[modalImage, setModalImage] = useState(false);

    const handleSidebar = () => {setReduceSidebar(!reduceSidebar)}

    const handleNotifications = () => {
        setShowNotifications(!showNotifications);
        setShowUserOptions(false);
        setNotifications(0);
    }

    const handleUserOptions = () => {
        setShowUserOptions(!showUserOptions);
        setShowNotifications(false);
    }

    const handleModalImageOpen = () => {setModalImage(true)}

    const handleModalImageClose = () => {setModalImage(false)}

    return (
        <Container>
            <Modal title="Imagen" closeFunction={handleModalImageClose} showModal={modalImage.toString()}>
                <img className="image-user" src="https://i.imgur.com/XeqUPzF.jpg" alt="Andrea Romero"/>
            </Modal>
            <SidebarToggle onClick={handleSidebar}>
                <FontAwesomeIcon icon={faBars}/>
            </SidebarToggle>
            <Form className="form-search-header">
                <FormGroupInput>
                    <FormInput type="text" name="search" placeholder="Buscar" autoComplete="off" />
                    <FontAwesomeIcon icon={faSearch} />
                </FormGroupInput>
            </Form>
            <Group>
                <ButtonIcon onClick={handleNotifications}>
                    {notifications > 0 && <NotificationNumber>{notifications > 99 ? `99+` : notifications}</NotificationNumber>}
                    <FontAwesomeIcon icon={faBell}/>
                    <Notifications showNotifications={showNotifications.toString()}>
                        <NotificationsHeader>
                            <FontAwesomeIcon icon={faBell}/>
                            Notifications
                        </NotificationsHeader>
                        <Notification to="">
                            <FontAwesomeIcon icon={faClipboardCheck}/>
                            <NotificationTitle>New Order!</NotificationTitle>
                        </Notification>
                        <Notification to="">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <NotificationTitle>New Message</NotificationTitle>
                        </Notification>
                    </Notifications>
                </ButtonIcon>
                <Group>
                    <Image onClick={handleModalImageOpen} src="https://i.imgur.com/XeqUPzF.jpg" alt="Andrea Romero" />
                    <Text onClick={handleUserOptions}>
                        Andrea
                        <FontAwesomeIcon icon={faAngleDown} />
                    </Text>
                    <UserOptions showUserOptions={showUserOptions.toString()}>
                        <Option to="">
                            <FontAwesomeIcon icon={faUser} />
                            Profile
                        </Option>
                        <Option to="">
                            <FontAwesomeIcon icon={faCog} />
                            Configurations
                        </Option>
                        <Option to="">
                            <FontAwesomeIcon icon={faSignOutAlt} />
                            Close session
                        </Option>
                    </UserOptions>
                </Group>
            </Group>
        </Container>
    );
}

export default Header;