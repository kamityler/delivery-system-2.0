import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


function LoginForm(){
    return (
        <Form>
            <Form.Group>
                <Form.Label controlId="formBasicEmail">Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter your email"/>
            </Form.Group>
            <Form.Group>
                <Form.Label controlId="formBasicPassword">Password</Form.Label>
                <Form.Control type="password" placeholder="Enter your password"/>
            </Form.Group>
            <Button type="submit"> Enter </Button>
        </Form>
    )
}

export default LoginForm;