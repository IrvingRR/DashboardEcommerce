import styled, {css} from 'styled-components';
import { NavLink, Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
    width: 200px;
    height: 100vh;
    background: var(--primary);
    padding: 0 0 30px 20px;
    transition: var(--transition);

    ${props => props.reduceSidebar === 'true' && css`
        width: 80px;
        padding: 0 0 10px 10px;
        overflow: hidden;
    `}

    @media only screen and (max-width: 425px) {
        width: 80px;
        padding: 0 0 10px 10px;
        overflow: hidden;
    }
`;

export const Header = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    padding: var(--padding);
`;

export const Logo = styled(Link)`
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;

    span {
        transition: var(--transition);
    }

    ${props => props.reduceSidebar === 'true' && css`
        span {
            opacity: 0;
            visibility: hidden;
        }
    `}

    @media only screen and (max-width: 425px) {
        span {
            opacity: 0;
            visibility: hidden;
        }
    }
`;

export const Elements = styled.ul`
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Element = styled.li`
    width: 100%;
    height: 60px;
    position: relative;

    @media only screen and (max-width: 768px) {
        height: 50px;
    }
`;

export const SidebarLink = styled(NavLink)`
    width: 100%;
    height: 100%;
    padding: var(--padding);
    display: flex;
    gap: 10px;
    align-items: center;
    color: #fff;
    transition: var(--transition);
    border-top-left-radius: 80px;
    border-bottom-left-radius: 80px;
    position: relative;

    &:hover {
        background: #fff;
        color: var(--primary);

        &::before{
            box-shadow: 35px 35px 0 10px #fff;
        }
    
        &::after{
            box-shadow: 35px -35px 0 10px #fff;
        }

        & > .tooltip {
            opacity: 1;
            visibility: visible;
            transform: translate(0);
        }
    }

    &::before{
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        background: transparent;
        top: -50px;
        right: 0px;
        border-radius: 100%;
        box-shadow: 35px 35px 0 10px transparent;
        pointer-events: none;
    }

    &::after{
        content: "";
        position: absolute;
        width: 50px;
        height: 50px;
        background: transparent;
        bottom: -50px;
        right: 0px;
        border-radius: 100%;
        box-shadow: 35px -35px 0 10px transparent;
        pointer-events: none;
    }

    &.active {
        background: #fff;
        color: var(--primary);

        &::before{
            box-shadow: 35px 35px 0 10px #fff;
        }
    
        &::after{
            box-shadow: 35px -35px 0 10px #fff;
        }
    }

    span {
        transition: var(--transition);
    }

    svg {
        transition: var(--transition);
    }

    ${props => props.reduceSidebar === 'true' && css`
        span {
            opacity: 0;
            visibility: hidden;
        }

        svg {
            font-size: 16px;
        }
    `}

    @media only screen and (max-width: 425px) {
        span {
            opacity: 0;
            visibility: hidden;
        }

        svg {
            font-size: 16px;
        }
    }
`;