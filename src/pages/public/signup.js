import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { UserContext } from "../../context/userContext";

function SignUp() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const { registerUser } = useContext(UserContext);


    const onSubmit = async (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email,password)
        console.log(registerUser)
        if(email && password && username){
            await registerUser(email, username, password);
        }
    }

  return (
    <Card style={{ width: '25rem' }}>
        <Card.Body>
            <Card.Title>SignUp</Card.Title>
            <Form className="signUp-form" onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formUserName">
                    <Form.Label>User name</Form.Label>
                    <Form.Control type="text" placeholder="Enter username" ref={usernameRef}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" ref={emailRef} />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" ref={passwordRef}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    SignUp
                </Button>
            </Form>
        </Card.Body>
        <Card.Footer>
            <small className="text-muted">Already having an account <a href='/signin'>SignIn</a></small>
        </Card.Footer>
     </Card>
    
  );
}

export default SignUp;