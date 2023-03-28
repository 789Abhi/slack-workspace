import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppsIcon from '@mui/icons-material/Apps';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import {useCollection} from "react-firebase-hooks/firestore"
import {db}  from '../firebase';
function Sidebar() {

  const[channels,loading,error]=useCollection(db.collection('rooms'));

  return (
    <SidebarContainer>
        <SidebarHeader>
         <SidebarInfo>
         <h2>ABHISHEK </h2>
         <h3>
         <FiberManualRecordIcon/>
            ONLINE
            </h3>
         </SidebarInfo>
         <CreateIcon/>
        </SidebarHeader>
        {/* Sidebar options */}
      <SidebarOption Icon={InsertCommentIcon} title='Threads'/>
      <SidebarOption Icon={InboxIcon} title='Mentions & Reactions'/>
      <SidebarOption Icon={DraftsIcon} title='Saved Items'/>
      <SidebarOption Icon={BookmarkBorderIcon} title='Channel Browser'/>
      <SidebarOption Icon={PeopleAltIcon} title='People & Users Group'/>
      <SidebarOption Icon={AppsIcon} title='Apps'/>
      <SidebarOption Icon={FileCopyIcon} title='File Browser'/>
      <SidebarOption Icon={ExpandLessIcon} title='Show Less'/>
      <hr/>
      <SidebarOption Icon={ExpandMoreIcon} title='Channels'/>
       <hr/>
      <SidebarOption Icon={AddIcon} addCahnnelOption title='Add Channels'/>

      {channels?.docs.map((doc)=>(
      <SidebarOption 
      key={doc.id}
      id={doc.id}
       
      title={doc.data().name}
      />
  ))}
    </SidebarContainer>
  );
}

export default Sidebar;

const SidebarContainer=styled.div`
    background-color:var(--slack-color);
    color:white;
    flex:0.3;
    border-top:1px solid #49274b;
    max-width:260px;
    min-height:1260px;
    margin-top:45px;

  >hr{
    margin:10px 0;
    border:1px solid #49274b;
  }

`
const SidebarHeader=styled.div`
display:flex;
border-bottom:1px solid #49274b;
padding:13px;


> .MuiSvgIcon-root{
    padding:8px;
    color:#49274b;
    font-size:18px;
    background-color:white;
    border-radius:999px;
}
`
const SidebarInfo=styled.div`
     
     flex:1;

     >h2{
        font-size:18px;
        font-weight:900;
        margin-bottom:5px;
     }

     >h3{
        font-size:13px;
        display:flex;
        align-items:center;
        font-weight:400; 
     }
     > h3 >.MuiSvgIcon-root{
             color:yellowgreen;
             font-size:14px;
             margin-top:1px;
             margin-right:2px;

     }
`