import React from "react";
import styled from "styled-components";
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

function Header() {
  const [user] = useAuthState(auth);
 
  return (
    <HeaderContainer>
      {/* left section */}
      <HeaderLeft>
        <HeaderAvatar onClick={()=>{auth.signOut()}} alt={user?.displayName} src={user?.photoURL} />
        <h6>{user?.email}</h6>
        <AccessTimeIcon />
      </HeaderLeft>
      {/* Search section */}
      <HeaderSearch>
        <SearchIcon />
        <input placeholder="SEARCH HERE" />
      </HeaderSearch>

      {/* Right section */}
      <HeaderRight>
        <HelpOutlineIcon />
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  width: 100%;
  background-color: var(--slack-color);
  color: white;
`;
const HeaderLeft = styled.div`
  display: flex;
  flex: 0.3;
  align-items: center;
  margin-left: 20px;
 

  // taking access over icon
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    padding-right:10px;
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;
  
  :hover {
    opacity: 0.8;
  }
`;
const HeaderSearch = styled.div`
  flex: 0.4;
  display: flex;
  opacity: 1;
  border-radius: 6px;
  background-color: #421f44;
  text-align: center;
  padding: 0 50px;
  color: gray;
  border: 1px gray solid;

  > input {
    background-color: transparent;
    border: none;
    outline: 0;
    min-width: 30vw;
    text-align: center;
    color: white;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  flex: 0.3;
  align-items: flex-end;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
  }
`;
