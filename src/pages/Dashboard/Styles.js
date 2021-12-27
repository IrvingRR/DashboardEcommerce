import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Cards = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
    padding: 20px 0;
`;

export const Card = styled.div`
    width: 250px;
    display: flex;
    border: 1px solid var(--gray);
    border-radius: var(--border-radius);
    margin: auto;
`;

export const CardIcon = styled.div`
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: var(--padding);
    background: var(--gray);

    svg {font-size: 20px;}
`;

export const CardBody = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    padding: var(--padding);

    .card-number {
        font-size: 15px;
        color: var(--primary);
        font-weight: 600;
    }
`;

export const Row = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;

    @media only screen and (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
`;

export const Column = styled.div`
    max-height: 300px;
    border: 1px solid var(--gray);
    padding: var(--padding);
    border-radius: var(--border-radius);
    gap: 10px;
    overflow: auto;
 
    @media only screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const ColumnHeader = styled.div`
    width: 100%;
    padding: 10px;
    border-bottom: 1px solid var(--gray);
`;

export const ColumnBody = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0;
`;

export const Group = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
`;

export const Register = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 10px;
    border-bottom: 1px solid var(--light-gray);
    color: var(--font-color);
    transition: var(--transition);
    border-radius: var(--border-radius);

    .register-title,
    .register-description,
    .register-date {
        font-size: 13px;
    }

    &:hover {
        background: var(--light-gray);
    }

    @media only screen and (max-width: 425px) {

        flex-direction: column;
        align-items: flex-start;
    }
`;

export const RegisterImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 100%;
`;
