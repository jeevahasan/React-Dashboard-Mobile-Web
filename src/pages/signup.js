import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef } from 'react';
import Card from 'react-bootstrap/Card';
import { useUserContext } from "../context/userContext";
import {
    createUserWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import {
    doc,
    setDoc
} from "firebase/firestore";
import {db} from '../firebase';
import {auth} from "../firebase";

function SignUp() {
    const usernameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const { registerUser } = useUserContext();

    const onSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email,password)
        if(email && password && username){
            // registerUser(email, username, password);
            createUserWithEmailAndPassword(auth, email, password).then((res) => {
                console.log(res)
                setDoc(doc(db, "Users",res.user.uid),{
                    username: username,
                    email: res.user.email
                })
                updateProfile(auth.currentUser, {
                    displayName : username,
                });
            })
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