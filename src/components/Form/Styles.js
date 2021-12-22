import styled from 'styled-components';

export const Form = styled.form`
    width: 100%;
    max-width: 500px;
    padding: var(--padding);

    @media only screen and (max-width: 768) {
        &.form-search-header {
            max-width: 400px;
        }
    }

    @media only screen and (max-width: 425px) {
        &.form-search-header {
            padding: 10px;
        }
    }
`;

export const FormGroup = styled.div`
    width: 100%;
    height: 45px;
    display: flex;
    align-items: center;
    position: relative;

    svg {
        position: absolute;
        right: 20px;
        font-size: 15px;
    }
`;

export const FormInput = styled.input`
    width: 100%;
    height: 100%;
    border-radius: 80px;
    background: var(--gray);
    border: 2px solid var(--gray);
    padding: 10px 40px 10px 20px;
    color: var(--font-color);

    &:focus {
        background: transparent;

        & ~ svg {
            color: var(--primary);
        }

    }
`;