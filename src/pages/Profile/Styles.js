import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

    .container-flex-center {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const BackgroundImage = styled.img`
    width: 100%;
    min-height: 400px;
`;

export const Card = styled.div`
    width: 100%;
    max-width: 500px;
    border-radius: var(--border-radius);
    position: relative;
    overflow: hidden;
    
    &::before {
        content: "";
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.4);
        position: absolute;
        top: 0;
        left: 0;
    }
`;

export const CardInformation = styled.div`
    width: 90%;
    background: #fff;
    border-radius: var(--border-radius);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    box-shadow: var(--shadow);
`;

export const CardHeader = styled.div`
    width: 100%;
    height: 100px;
    border-radius: var(--border-radius);
    position: relative;
`
export const CardImage = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 100%;
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    margin: auto;
    border: 5px solid #fff;
`;

export const CardBody = styled.div`
    width: 100%;
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    gap: 10px;
`;
