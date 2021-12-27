import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import { Form, FormGroup, FormButton, LegendError } from './Styles';
import Input from './Input';
import { useForm } from '../../hooks/useForm';

const FormSearch = function () {

     const initialForm = {
        search: {value: null, valid: null}
    };

    const successFunction = () => {
        console.log(`Buscando ${form}`);
        console.log(`Estado del formulario: ${statusForm}`);
        resetForm();
    }

    const { handleChange, handleSubmit, resetForm, statusForm, form } = useForm(initialForm, successFunction);
    
    return (

        <div className="container container-form-search">
            <Form className="form-flex-row"onSubmit={handleSubmit}>
                <FormGroup>
                    <Input onChange={handleChange} expression={/^[a-zA-ZÀ-ÿ\s]{1,40}$/} type="text" placeholder="Search" autoComplete="off" />
                    <FontAwesomeIcon icon={faSearch} />
                {/* <LegendError>Only letters, numbers and maximun 40 characters</LegendError> */}
                </FormGroup>
                <FormButton type="button">Search</FormButton>
            </Form>
        </div>
    );
}

export default FormSearch;