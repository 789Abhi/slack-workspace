import React from 'react'
import styled from 'styled-components'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import {selectRoomId} from '../features/appSlice';
import { useSelector } from 'react-redux'
import ChatInput from './ChatInput';
function chat() {
// eslint-disable-next-line react-hooks/rules-of-hooks
const roomId=useSelector(selectRoomId);

  return (
    <ChatContainer>
  <>
    <Header>
        <HeaderLeft>
           <h4><strong>#Room-Name</strong>
           
           </h4>
         <StarBorderIcon/>
        </HeaderLeft>
        <HeaderRight>
        <p>
        <InfoIcon/>details
            </p> 
        </HeaderRight>
    </Header>
   
    <ChatMessages>

    </ChatMessages>
    <ChatInput  />
    </>
    </ChatContainer>
  )
}

export default chat;

const ChatContainer=styled.div`
  margin-top:50px;
  flex:0.7;
  flex-grow:1;
`

const Header=styled.div`
display:flex;
justify-content:space-between;
padding:20px;
border-bottom:1px solid lightgray;

`
const HeaderRight=styled.div`
> p{
    display:flex;
    align-items:center;
    font-size:14px;
}
>p >.MuiSvgIcon-root{
    font-size:16px;
    margin-right:5px !important;
}

`
const HeaderLeft=styled.div`

display:flex;
align-items:center;
>h4{
    display:flex;
    text-transform:lowercase; 
    margin-right:10px;   
    
    }

    >h4 >.MuiSvgIcon-root{
        margin-left:10px;
        font-size:18px;
    }

`
const ChatMessages=styled.div`

`