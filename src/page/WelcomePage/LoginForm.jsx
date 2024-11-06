import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './wp.css'

function LoginForm(){
    return (
        <Form>
            <h1 className='form-header'>Login now!</h1>
            <Form.Group >
                <Form.Label controlId="formBasicEmail">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email"/>
            </Form.Group>
            <Form.Group>
                <Form.Label controlId="formBasicPassword">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password"/>
            </Form.Group>
            <Button type="submit"> Login </Button>
            <br/>
            <a className='form-link' href='signup'>Don't have account? Click here!</a>
        </Form>
    )
}

export default LoginForm;