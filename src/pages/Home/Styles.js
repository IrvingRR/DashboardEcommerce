import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const Cards = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
    padding: 20px 0;
`;

export const Card = styled.div`
    width: 250px;
    border: 1px solid var(--gray);
    border-radius: var(--border-radius);
    overflow: hidden;
    margin: auto;
`;

export const CardHeader = styled.div`
    width: 100%;
    height: 150px;
    background: var(--light-gray);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    svg {
        font-size: 50px;
    }
`;

export const CardBody = styled.div`
    width: 100%;
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    h3, p {
        text-align: center;
    }
`;
