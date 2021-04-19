import React, { FormEvent, useState} from 'react';
import { Button, Container, Form, Row, Col } from 'react-bootstrap';
import Validator from '../services/validations/validator';

const Login = ():JSX.Element => {

    const validator = new Validator();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailValidation = validator.emailValidation(email);
    const passwordValidation = validator.passwordValidation(password);

    const onSubmitForm = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(emailValidation == null && passwordValidation == null){
            console.log(email)
        }else{
            alert('Incorrect credentials')
        }
    }
    return(
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={onSubmitForm}>
                        <Form.Row>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>E-mail: </Form.Label>
                                <Form.Control type="email" placeholder="Enter email" 
                                value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                <small>{emailValidation}</small>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password: </Form.Label>
                                <Form.Control type="password" placeholder="Password" 
                                value={password} onChange={(e)=>setPassword(e.target.value)}/>
                                <small>{passwordValidation}</small>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Button variant="success" type="submit">
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

export default Login;