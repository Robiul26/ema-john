

import { useContext, useState } from 'react';
import { UserContext } from "../../App";
import { useLocation, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, createUserWithMailAndPwd, handleFbSignIn, handleGoogleSignIn, handleSignOut, signInWithMailAndPwd } from './loginManager';
// console.log(auth);

function Login() {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password:'',
    photo: '',
    error: '',
    success: false
  });

  const [LogedInUser, setLogedInUser] = useContext(UserContext); 
  const navigate = useNavigate();
  const location = useLocation(); 

  let from = location.state?.from?.pathname || "/";
  
  
   const googleSignIn = () => {
     handleGoogleSignIn()
     .then(res => {
      handleResponse(res, true);
     }) 
   }
   
   const fbSignIn = () => {
    handleFbSignIn()
    .then(res => {
      handleResponse(res, true);
    })
  }

   const signOut = () => {
     handleSignOut()
     .then(res => {
      handleResponse(res, false);
     })
   }
const handleResponse = (res, redirect) => {
  setUser(res);
  setLogedInUser(res);
  if(redirect){
    navigate(from, { replace: true });
  }
}

  
  const handleBlur = (e) => {
    let isFieldValid = true;
    if(e.target.name === 'email'){
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
    }
    if(e.target.name === 'password'){
      const isPasswordValide = e.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = (isPasswordValide && passwordHasNumber);
    }
    if(isFieldValid){
      const newUserINfo = {...user};
      newUserINfo[e.target.name] = e.target.value;
      setUser(newUserINfo);
    }
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if(newUser && user.email && user.password){
     createUserWithMailAndPwd(user.name, user.email, user.password)
     .then(res => {
      handleResponse(res, true);      
     })

    }
    
    if(!newUser && user.email && user.password){      
     signInWithMailAndPwd(user.email, user.password)
     .then(res => {
      handleResponse(res, true);     
     })
    }
  }



  return (
    <div style={{ textAlign:'center' }}>
      { user.isSignedIn? <button onClick={signOut}>Sign Out</button>
      : <button onClick={googleSignIn}>Sign In</button>
      }
      <br />
      <button onClick={fbSignIn}>SignIn with Facebook</button>
      <h1>Our Own Authentication</h1>
      <input type="checkbox" onChange={() => setNewUser(!newUser)} name='newUser' id='newUser' />
      <label htmlFor='newUser'>New User Sign in</label>
      {
        user.isSignedIn && <div>
          <h2>Welcome, {user.name}</h2>
          <p>Email: {user.email}</p>
          <img src={user.photo} alt="userPhoto" />
        </div>
      }
      <form action="" onSubmit={submitHandler}>
        { newUser && <input type="text" name='name' onBlur={handleBlur} placeholder='Your name' />} <br/>
        <input type="text" onBlur={handleBlur} name='email' placeholder='Username' required /> <br />
        <input type="password" onBlur={handleBlur} name="password" placeholder='Password' required /> <br />
        <input type="submit" value={newUser?'Sign Up':'Sign In'} />
      </form>
      <p style={{ color:'red' }}>{user.error}</p>
      {user.success && <p style={{ color:'green' }}>User {newUser ? 'Created' : 'Logged in'} successfully</p> }
    </div>
  );
}

export default Login;
