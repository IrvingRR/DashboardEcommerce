import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserTie, faImages, faUser } from '@fortawesome/free-solid-svg-icons';
import { Row, Column, ColumnHeader, ColumnImage, ColumnFooter } from './Styles';
import { Form, FormGroup, FormGroupInput, Label, FormButton, FormButtonFile, LegendError } from '../../components/Form/Styles';
import Input from '../../components/Form/Input';
import { useForm } from '../../hooks/useForm';
import { Toaster, toast } from 'react-hot-toast';

const Profile = function() {

    const expressions = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        phone: /^\d{7,14}$/ 
    }

    const initialForm = {
        name: {value: null, valid: null},
        lastname: { value: null, valid: null },
        phone: { value: null, valid: null },
        email: { value: 'andrearomero@gmail.com', valid: true },
    };

    const successFunction = () => {
        console.log("Función de exito");
        toast.success("All it's ok");
        resetForm();
    }

    const errorFunction = () => {
        console.log("Función de error");
        toast.error("Ops!, there is a problem");
    }

    const { handleChange, handleSubmit, resetForm, form } = useForm(initialForm, successFunction, errorFunction);
    
    return (
        <div className="container">
             <h2 className="page-title">Profile</h2>
            <Row>
                <Column>
                    <ColumnHeader>
                        <ColumnImage src="https://i.imgur.com/XeqUPzF.jpg" alt="Andrea Romero"/>
                        <h3 className="user-name">Andrea Romero</h3>
                        <p className="user-email">andrearomero@gmail.com</p>
                        <p className="user-email">6181898699</p>
                        <p className="user-status">
                            <FontAwesomeIcon icon={faUser} />
                            Active
                        </p>
                        <p className="user-type">
                            <FontAwesomeIcon icon={faUserTie} />
                            Super admin
                        </p>
                    </ColumnHeader>
                </Column>
                <Column>
                    <Form className="form-grid" onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label>Name:</Label>
                            <FormGroupInput>
                                <Input type="text" name="name" placeholder="Name" handleChange={handleChange} expression={expressions.name} valid={form.name.valid !== null && form.name.valid.toString()}/>
                            </FormGroupInput>
                            <LegendError valid={form.name.valid !== null && form.name.valid.toString()} >Only letters and maximun 40 characters</LegendError>
                        </FormGroup> 
                        <FormGroup>
                            <Label>Lastname:</Label>
                            <FormGroupInput>
                                <Input type="text" name="lastname" placeholder="Lastname" handleChange={handleChange} expression={expressions.lastname} valid={form.lastname.valid !== null && form.lastname.valid.toString()}/>
                            </FormGroupInput>
                            <LegendError valid={form.lastname.valid !== null && form.lastname.valid.toString()}>Only letters and maximun 40 characters</LegendError>
                        </FormGroup> 
                        <FormGroup>
                            <Label>Phone:</Label>
                            <FormGroupInput>
                                <Input type="text" name="phone" placeholder="Phone" handleChange={handleChange} expression={expressions.phone} valid={form.phone.valid !== null && form.phone.valid.toString()}/>
                            </FormGroupInput>
                            <LegendError valid={form.phone.valid !== null && form.phone.valid.toString()}>Only numbers and minium 10 characters</LegendError>
                        </FormGroup> 
                        <FormGroup>
                            <Label>Email address:</Label>
                            <FormGroupInput>
                                <Input type="email" name="email" value={form.email.value} disabled/>
                            </FormGroupInput>
                        </FormGroup> 
                        <FormGroup>
                            <Input type="file" name="image" />
                            <FormButtonFile>
                                <FontAwesomeIcon icon={faImages}/>
                                Change image
                            </FormButtonFile>
                        </FormGroup> 
                            <FormButton>Update</FormButton>
                    </Form>
                    <ColumnFooter>
                    </ColumnFooter>
                </Column>
            </Row>
            <Toaster position='bottom-right' />
        </div>
    );
}

export default Profile;