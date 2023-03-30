import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button';
import { auth, provider } from '../firebase';

function Login() {
    const signIn=e=>{
        e.preventDefault();
        auth.signInWithPopup(provider).catch((error)=>(
            alert(error.message)
        ));
    }
  return (
    <LoginContainer>
       <LoginInnerContainer>
         <img src="https://luna1.co/dc739c.png" alt="" />
         <h1>SIGNIN TO SLACK WORKSPACE</h1>
      <p> <a href="https://github.com/789Abhi">FOLLOW ON GITHUB</a></p>
       <Button onClick={signIn}>SIGN IN WITH GOOGLE</Button>
       </LoginInnerContainer>
      
    </LoginContainer>
  )
}

export default Login;
const LoginContainer=styled.div`
background-color:#f8f8f8;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
padding:10px;

`
const LoginInnerContainer=styled.div`
padding:100px;
text-align:center;
background-color:white;
border-radius:10px;
box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);

  >img{
    object-fit:conatin;
    height:100px;
    margin-bottom:40px;
  }
  >button{
    margin-top:50px;
    text-transform:inherit!important;
    background-color:#0a8d48!important;
    color:white;

  }
`