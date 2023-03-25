import React from 'react'
import styled from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
function header() {
  return (
    <HeaderContainer>
        {/* left section */}
        <HeaderLeft>
        <HeaderAvatar/>
        <AccessTimeIcon/>
        </HeaderLeft>
        {/* Search section */}
        <HeaderSearch>
         <SearchIcon/>
         <input placeholder='SEARCH HERE' />
        </HeaderSearch>

        {/* Right section */}
        <HeaderRight>
         <HelpOutlineIcon/>
        </HeaderRight>

    </HeaderContainer>
  )
}

export default header

const HeaderContainer=styled.div`
display:flex; 
position:fixed;
align-items:center;
justify-content:space-between;
padding:10px 0;
width:100%;
background-color:var(--slack-color);
color:white;
`
const HeaderLeft=styled.div`
display:flex;
flex:0.2;  
align-items:center;
margin-left:20px;
    
// taking access over icon 
  > .MuiSvgIcon-root{
    margin-left:auto;
    margin-right:30px;

}
`
const HeaderAvatar=styled(AccountCircleIcon)`
cursor:pointer;

:hover{
    opacity:0.8;
}
`
const HeaderSearch=styled.div`
flex:0.4;
display:flex;
opacity:1;
border-radius:6px;
background-color:#421f44;
text-align:center;  
padding:0 50px;
color:gray;
border:1px solid gray;

> input{
    width:100%;
    background-color:transparent;
    border:none;
    outline:none;
    min-width:30vw;
    text-align:center;
    color:white;
}
`

const HeaderRight=styled.div`
display:flex;
flex:0.3;
align-items:flex-end;


> .MuiSvgIcon-root{
    margin-left:auto;
    margin-right:20px;
}
`
