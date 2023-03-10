import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../firebase';
function Home(){

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              const uid = user.uid;
              console.log("uid", uid)
            } else {
              // User is signed out
              console.log("user is logged out")
            }
          });
         
    }, [])

    return(
        <div>
            <h1>Test</h1>
        </div>
    );
}
export default Home;