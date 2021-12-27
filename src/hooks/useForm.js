import { useState } from 'react';

export const useForm = function (initialForm, successFunction, errorFunction) {
    
    const [form, setForm] = useState(initialForm);
    // const [statusForm, setStatusForm] = useState(null);

    const handleChange = (e, expression) => {
        
        if (expression.test(e.target.value)) {
            setForm({
                ...form,
                [e.target.name]: {value: e.target.value, valid: true}
            });
            
        } else {
            setForm({
                ...form,
                [e.target.name]: {value: e.target.value, valid: false}
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const invalids = Object.values(form).filter(el => el.valid === false || el.valid === null);
        
        if (invalids.length > 0) {
            // setStatusForm(false);
            errorFunction();
        } else {
            // setStatusForm(true);
            e.target.reset();
            successFunction();
        }
    }

    const resetForm = () => {
        setForm(initialForm);
    }

    return {
        form: form,
        // statusForm: statusForm,
        handleChange: handleChange,
        handleSubmit: handleSubmit,
        resetForm: resetForm
    }
}