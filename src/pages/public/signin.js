import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useRef, useContext, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { UserContext } from '../../context/userContext';
import Alert from 'react-bootstrap/Alert';

function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signInUser, forgotPassword } = useContext(UserContext);
    const [show, setShow] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        if(email && password){
            await signInUser(email, password).then((res) => {
                localStorage.setItem('userUID', res.user.uid);
                window.location.assign("/userlist");
            }).catch((err) => {
                setShow(true);
            })
        }
    }

    const forgotPasswordHandler = () => {
        const email = emailRef.current.value;
        if(email) {
            forgotPassword(email).then(() => (emailRef.current.value = ""))
        }
    }

  return (
    <div className='container'>
        <div className='col-md-6 m-auto mt-5'>
        {show?
            <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Entered password is wrong</Alert.Heading>
            </Alert> : ""
        }
        <Card>
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
        </div>
    </div>

    
  );
}

export default SignIn;