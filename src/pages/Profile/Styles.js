import styled from 'styled-components';

export const Row = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 350px 1fr;
    gap: 20px;
    padding: 20px 0;
    margin: auto;

    @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(250px, 1fr));
    }
`;

export const Column = styled.div`
    border: 1px solid var(--gray);
    border-radius: var(--border-radius);
    padding: var(--padding);
    position: relative;

    @media only screen and (max-width: 375px) {
        padding: 20px 0;
    }
`;

export const ColumnHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 13px;

    .user-type {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 10px 20px;
        border-radius: var(--border-radius);
        border: 1px solid var(--gray);
        font-weight: 600;
        background: var(--gray);
    }

    .user-status {
        display: flex;
        align-items: center;
        gap: 10px;
        font-weight: 600;

        svg {color: var(--primary);}
    }
`;

export const ColumnImage = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 100%;
    border: 5px solid #fff;
`;

export const ColumnFooter = styled.div`
    width: 100%;
    padding: var(--padding);
    display: flex;
    align-items: center;
    gap: 10px;
`;