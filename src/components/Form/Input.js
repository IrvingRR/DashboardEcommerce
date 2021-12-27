import React from 'react';
import {FormInput} from './Styles';

const Input = function ({type, name, placeholder, disabled, valid, value, expression, handleChange }) {
   
    const functionChange = (e) => handleChange(e, expression);

    return (
        <FormInput
            type={type}
            name={name}
            placeholder={placeholder}
            disabled={disabled && disabled}
            expression={expression}
            onChange={functionChange}
            autoComplete="off"
            valid={valid}
            value={value && value}
        />
    );
}

export default Input; 