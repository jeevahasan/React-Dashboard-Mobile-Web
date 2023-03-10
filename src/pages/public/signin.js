import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';
import Card from 'react-bootstrap/Card';
import {
    signInWithEmailAndPassword
} from "firebase/auth";
import {auth} from "../../firebase/index";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if(email && password){
            signInWithEmailAndPassword(auth, email, password).then((res) => {
                localStorage.setItem('userUID', res.user.uid);
                console.log("test")
                navigate("/home");   
            })
        }
        console.log(email,password)
        // if(email && password){
        //     signInUser(email, password);
        // }
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