import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';
import "./Home.css";


const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    let { createUser } = useContext(UserContext);
    let navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        createUser(username, password, firstName, lastName, email).then(() => {
            navigate('/login');
        }).catch(error => {
            console.log(error);
            window.alert('Failed registration: error creating user');
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>REGISTER</h1>
            <br></br><br></br>
            <span>Username  </span>
            <input placeholder="Enter Username" type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
            <br></br><br></br>
            <span>Password  </span>
            <input placeholder="Enter Password" type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
            <br /><br></br>
            <span>First Name  </span>
            <input placeholder="Enter First Name" type="text" name="firstName" value={firstName} onChange={e => setFirstName(e.target.value)} />
            <br /><br></br>
            <span>Last Name  </span>
            <input placeholder="Enter Last Name" type="text" name="lastName" value={lastName} onChange={e => setLastName(e.target.value)} />
            <br /><br></br>
            <span>Email  </span>
            <input placeholder="Enter Email" type="text" name="email" value={email} onChange={e => setEmail(e.target.value)} />
            <br /><br></br>
            <button>Sign Up</button>
        </form>
    )
};

export default SignUp;
 
 

