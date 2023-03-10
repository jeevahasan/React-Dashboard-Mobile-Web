import React, {useState} from 'react';
import {
    getDoc,
    doc
} from "firebase/firestore";
import {db} from '../../firebase';

function Profile(){
    const [email, setEmail] = useState(null);
    const [username, setUsername] = useState(null);

    const docRef = doc(db, "Users", localStorage.getItem("userUID"));

    getDoc(docRef).then((res) => {
        console.log(res.data())
        const user = res.data();
        setEmail(user.email);
        setUsername(user.username);
    })
      
    return(
        <div>
            <h1>Email: {email}</h1>
            <h1>Username: {username}</h1>
        </div>
    );
}
export default Profile;