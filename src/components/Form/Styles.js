import styled, {css} from 'styled-components';

export const Form = styled.form`
    width: 100%;
    /* max-width: 600px; */
    padding: var(--padding);
    position: relative;
    text-align: center;
    /* margin: auto; */

    &.form-search-header {
        max-width: 500px;
    }

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
    max-height: 90px;
    display: flex;
    flex-direction: column;
    position: relative;
    transition: var(--transition);
`;

export const FormGroupInput = styled.div`
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

export const FormBody = styled.div`
    width: 100%;

    &.form-flex-row {
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 20px 0;
        max-width: 400px;
    }

    &.form-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 5px;

        @media only screen and (max-width: 425px) {
            grid-template-columns: 1fr;
        }
    }
`;

export const FormFooter = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 0;
`;

export const FormInput = styled.input`
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background: transparent;
    border: 2px solid var(--gray);
    padding: 10px 40px 10px 20px;
    color: var(--font-color);
    transition: var(--transition);

    ${props => props.valid === 'false' && css`
        color: red;
        border-color: red;
    `}

    &:focus {
        border-color: var(--primary);

        & ~ svg {
            color: var(--primary);
        }

        ${props => props.valid === 'false' && css`
            color: red;
            border-color: red;
        `}
    }

    &[type="file"] {display: none;}
    
    &[disabled] {background: var(--light-gray);}
`;

export const FormButton = styled.button`
    padding: 10px 20px;
    background: var(--primary);
    transition: var(--transition);
    color: #fff;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: var(--border-radius);
    cursor: pointer;

    &:hover { background: var(--primary-hover);}
`;

export const FormButtonFile = styled.button`
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background: transparent;
    border: 2px solid var(--gray);
    padding: 10px 40px 10px 20px;
    color: var(--font-color);
    transition: var(--transition);
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
        background: var(--gray);

        svg {color: var(--primary);}
    }

`;

export const LegendError = styled.p`
    width: 100%;
    padding: 0;
    color: red;
    display: flex;
    align-items: center;
    transition: var(--transition);
    font-size: 13px;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    
    ${props => props.valid === 'false' && css`
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    `}

    svg {
        position: absolute;
        right: 20px;
        color: red;
    }
`;

export const Label = styled.label`
    text-align: left;
    padding: 5px 0;
`;