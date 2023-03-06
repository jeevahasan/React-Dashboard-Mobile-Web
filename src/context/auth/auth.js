import React, {useState}  from 'react';
import SignIn from '../../pages/signin';
import SignUp from '../../pages/signup';

const Auth = () => {
    const [index, setIndex] = useState(false);
    const toggleIndex = () => {
        setIndex((prevState) => !prevState);
    };

    return(
        <div className='container'>
            {!index ? <SignIn /> : <SignUp />}
            <p onClick={toggleIndex}>
                {!index ? "Click here to Sign Up" : "Sign In"}
            </p>
        </div>
    )

}

export default Auth;