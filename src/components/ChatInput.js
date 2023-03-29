import Button from '@mui/material/Button';
import React, { useState } from 'react';
import Styled from 'styled-components';
import {db}  from '../firebase';
import firebase from 'firebase/compat/app';

function ChatInput({channelName,channelId,chatRef}) {
    const [input,setInput]=useState(null);
    const sendMessage=(e)=>{
        e.preventDefault();   //prevents refresh

        if(!channelId){
            return false;
        }
        db.collection('rooms').doc(channelId).collection('messages').add({
            message:input,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            user:'Abhi',
            userImage:'https://images.moneycontrol.com/static-mcnews/2021/10/Virat-Kohli-illustration.jpg?impolicy=website&width=1600&height=900'
            
        });
        chatRef.current.scrollIntoView({
            behaviour:'smooth'
          });
       setInput("");
    }
  return (
    <ChatContainer>
        <form>
            <input value={input} onChange={(e)=>setInput(e.target.value)} placeholder={`Message #${channelName}`} />
            <Button hidden type='submit' onClick={sendMessage}>
             SEND
            </Button>
        </form>
    </ChatContainer>
  )
}

export default ChatInput;

const ChatContainer=Styled.div`
border-radius:20px;

>form {
    position:relative;
    display:flex;
    justify-content:center;
}
>form >input{
    position:fixed;
    bottom:20px;
    width:60%;
    border:1px solid gray;
    border-radius:3px;
    padding:20px;
    outline:none;
}
>form >button{
    display:none !important;
}
`