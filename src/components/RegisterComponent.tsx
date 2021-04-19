import React, { FormEvent, useState } from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import { User } from '../interfaces/User';
import Validator from '../services/validations/validator';

const Register = ():JSX.Element => {

    const validator = new Validator();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [button, setButton] = useState(false);


    const nameValidation = validator.nameValidation(name);
    const lastNameValidation = validator.lastNameValidation(lastName);
    const emailValidation = validator.emailValidation(email);
    const passwordValidation = validator.passwordValidation(password);
    const passwordConfirmationValidation = validator.passwordRepeatValidation(passwordConfirmation,password);
    
    // if(nameValidation&&lastNameValidation&&emailValidation&&passwordValidation&&passwordConfirmationValidation){
    //     setButton(true);
    // }

    const onSubmitForm = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newUser:User = {
            name: name,
            lastName: lastName,
            email: email,
            password: password
        }
        console.log(newUser)
    }

    return(
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={onSubmitForm}>
                        <Form.Row>
                            <Col md={6}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name: </Form.Label>
                                    <Form.Control type="text" placeholder="Enter your name" 
                                    value={name} onChange={(e)=>setName(e.target.value)}/>
                                    <small>{nameValidation}</small>
                                </Form.Group>
                                <Form.Group controlId="formBasicLastName">
                                    <Form.Label>Last Name: </Form.Label>
                                    <Form.Control type="text" placeholder="Enter your last name" 
                                    value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
                                    <small>{lastNameValidation}</small>
                                </Form.Group>
                                <Form.Group controlId="formBasicEmailRegister">
                                    <Form.Label>E-mail: </Form.Label>
                                    <Form.Control type="email" placeholder="Enter your email" 
                                    value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                    <small>{emailValidation}</small>
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formBasicPasswordRegister">
                                    <Form.Label>Password: </Form.Label>
                                    <Form.Control type="password" placeholder="Enter your password"
                                    value={password} onChange={(e)=>setPassword(e.target.value)} 
                                    />
                                    <small>{passwordValidation}</small>
                                </Form.Group>
                                <Form.Group controlId="formBasicPasswordAgain">
                                    <Form.Label>Repeat Password: </Form.Label>
                                    <Form.Control type="password" placeholder="Enter password again" 
                                    value={passwordConfirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)}/>
                                    <small>{passwordConfirmationValidation}</small>
                                </Form.Group>
                            </Col>
                        </Form.Row>
                        <Form.Row>
                            <Button variant="primary" type="submit" disabled={!button}>
                                Submit
                            </Button>
                            <Button variant="danger" type="reset">
                                Cancel
                            </Button>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Register;