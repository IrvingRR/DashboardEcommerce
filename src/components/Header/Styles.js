import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--padding);
    background: #fff;
    border-bottom: 1px solid var(--light-gray);

    @media only screen and (max-width: 425px) {
        padding: 10px;
    }
`;

export const SidebarToggle = styled.button`
    width: 50px;
    height: 50px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
    transition: var(--transition);
    border: 1px solid var(--gray);
    border-radius: var(--border-radius);

    &:hover {color: var(--primary);}

    @media only screen and (max-width: 425px) {
        display: none;
    }
`;

export const Group = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    color: var(--font-color);
    font-size: 15px;
    font-weight: 600;
    position: relative;
`;

export const Image = styled.img`
    width: 45px;
    height: 45px;
    border-radius: 100%;
    cursor: pointer;

    @media only screen and (max-width: 375px) {
        width: 35px;
        height: 35px;
    }
`;

export const ButtonIcon = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    position: relative;
    
    &:hover{
        & > svg {
            color: var(--primary);
        }
    }

`;

export const Text = styled.p`
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    cursor: pointer;
    tranition: var(--transition);

    &:hover {svg {color: var(--primary);}}
`;

export const NotificationNumber = styled.span`
    width: 15px;
    height: 15px;
    border-radius: 100%;
    background: rgb(238, 30, 30);
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    position: absolute;
    top: -19px;
    left: -20px;
    font-size: 11px;
`;

export const Notifications = styled.div`
    width: 200px;
    height: 0;
    position: absolute; 
    top: 40px;
    right: 0;
    background: #fff;
    box-shadow: var(--shadow);    
    border-radius: var(--border-radius);
    overflow: hidden;
    transition: var(--transition);

    ${props => props.showNotifications === 'true' && css`
        height: auto;
        max-height: 200px;
        overflow: auto;
    `}

    @media only screen and (max-width: 425px) {
        right: -30px;
    }

    @media only screen and (max-width: 375px) {
        right: -50px;
    }
`;

export const NotificationsHeader = styled.div`
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    background: var(--gray);
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 600;
    font-size: 13px;
`;

export const Notification = styled(Link)`
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: var(--transition);
    color: var(--font-color);
    font-size: 13px;

    &:hover {
        background: #ccc;
    }
`;

export const NotificationTitle = styled.h3`
    font-size: 13px;
    font-weight: 400;
`;

export const UserOptions = styled.div`
    width: 200px;
    height: 0;
    position: absolute; 
    top: 55px;
    right: 0;
    background: #fff;
    box-shadow: var(--shadow);    
    border-radius: var(--border-radius);
    overflow: hidden;
    transition: var(--transition);

    ${props => props.showUserOptions === 'true' && css`
        height: auto;
        max-height: 200px;
        overflow: auto;
    `}
`;

export const Option = styled(Link)`
    width: 100%;
    height: 50px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    gap: 10px;
    transition: var(--transition);
    color: var(--font-color);
    font-weight: 400;
    font-size: 13px;

    &:hover {
        background: #ccc;
    }
`;