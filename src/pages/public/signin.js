import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../../context/userContext';

function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signInUser, forgotPassword } = useContext(UserContext);

    const onSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if(email && password){
            await signInUser(email, password);
        }
    }

    const forgotPasswordHandler = () => {
        const email = emailRef.current.value;
        if(email) {
            forgotPassword(email).then(() => (emailRef.current.value = ""))
        }
    }

  return (
    <Card style={{ width: '25rem' }}>
        <Card.Body>
            <Card.Title>SignIn</Card.Title>
            <Form className="signIn-form" onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    SignIn
                </Button>
            </Form>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Don't have an account? <a href='/signup'>SignUp</a></small>
        </Card.Footer>
     </Card>
    
  );
}

export default SignIn;