import styled, {css} from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--padding);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    transition: var(--transition);
    opacity: 0;
    visibility: hidden;

    ${props => props.showModal === 'true' && css`
        opacity: 1;
        visibility: visible;
    `}
`;

export const Card = styled.div`
    width: 100%;
    max-width: 500px;
    max-height: 600px;
    position: relative;
    background: #fff;
    border-radius: var(--border-radius);
    overflow: hidden;
    padding: var(--padding);
    transition: var(--transition);
    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;

    .image-user {
        width: 100%;
        height: 350px;
        border-radius: var(--border-radius);
    }

    ${props => props.showModal === 'true' && css`
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    `}
`;

export const Header = styled.div`
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
`;

export const ButtonClose = styled.button`
    width: 30px;
    height: 30px;
    border: 1px solid var(--gray);
    border-radius: var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    padding: 10px;
    cursor: pointer;
`;