import React, {useState} from 'react';
import {
    getDoc,
    doc
} from "firebase/firestore";
import {db} from '../../firebase';
import { Card } from 'react-bootstrap';

function Profile(){
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);

    const docRef = doc(db, "Users", localStorage.getItem("userUID"));

    getDoc(docRef).then((res) => {
        const user = res.data();
        setEmail(user.email);
        setUsername(user.username);
    })
      
    return(
        <div className='container'>
            <div className='col-md-6 m-auto mt-5'>
                <Card>
                    <Card.Body>
                        <Card.Title>User Details</Card.Title>
                        <Card.Subtitle>Username: {username}</Card.Subtitle>
                        <Card.Subtitle>Email: {email}</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
}
export default Profile;