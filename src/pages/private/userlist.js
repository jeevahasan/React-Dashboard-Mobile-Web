import ListGroup from 'react-bootstrap/ListGroup';
import React, {useState} from 'react';
import {
    getDocs,
    doc,
    collection
} from "firebase/firestore";
import {db} from '../../firebase';

function UserList() {
  const [users, setUsers] = useState([]);

  getDocs(collection(db, "Users"))
    .then((querySnapshot)=>{               
        const newData = querySnapshot.docs
            .map((doc) => ({...doc.data(), id:doc.id }));
        setUsers(newData);
    })

  return (
    <>
      
        <ListGroup className="my-2">
        {users.map((user) => (
          <>
            <ListGroup.Item>{user.username}</ListGroup.Item>
            <ListGroup.Item>{user.email}</ListGroup.Item>
          </>
        ))}
        </ListGroup>
    </>
  );
}

export default UserList;