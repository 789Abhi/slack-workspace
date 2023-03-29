import React,{useRef,useEffect} from "react";
import styled from "styled-components";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InfoIcon from "@mui/icons-material/Info";
import { selectRoomId } from "../features/appSlice";
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import { useDocument, useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import Message from "./Message";

// Changed function name to start with uppercase letter
function Chat() {
  const chatRef=useRef(null);
  const roomId = useSelector(selectRoomId);

  // Wrapped conditionals in parentheses for readability
  const [roomDetails] = useDocument(
    (roomId && db.collection("rooms").doc(roomId))
  );

  // Changed "colllection" to "collection" in query
  const [roomMessage,loading] = useCollection(
    (roomId &&
      db.collection("rooms").doc(roomId).collection("messages").orderBy("timestamp", "asc"))
  );

  useEffect(()=>{
    chatRef?.current?.scrollIntoView({
      behaviour:'smooth'
    });
  },[roomId,loading])

  return (
    <ChatContainer>
      {roomDetails && roomMessage && (
      
       <>
  
       <Header>
         <HeaderLeft>
           {/* Changed room name to be dynamic */}
           <h4>
             <strong>{roomDetails?.data().name}</strong>
           </h4>
           <StarBorderIcon />
         </HeaderLeft>
         <HeaderRight>
           <p>
             <InfoIcon />
             details
           </p>
         </HeaderRight>
       </Header>

       <ChatMessages>
         {roomMessage?.docs.map((doc)=>{
           const {message,timestamp,user,userImage}=doc.data();

           return(
             <Message
             key={doc.id}
             message={message}
             timestamp={timestamp}
             user={user}
             userImage={userImage}

             
             />
           )
         })}
     <ChatBottom ref={chatRef}/>

       </ChatMessages>

       {/* Pass room name as a prop */}
       <ChatInput chatRef={chatRef} channelId={roomId} channelName={roomDetails?.data().name} />
     </>

      )}
      
    </ChatContainer>
  );
}

export default Chat;

const ChatBottom=styled.div`
margin-bottom:200px;
`

const ChatContainer = styled.div`
  margin-top: 50px;
  flex: 0.7;
  flex-grow: 1;
  overflow-y:auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }
  > p > .MuiSvgIcon-root {
    font-size: 16px;
    margin-right: 5px !important;
  }
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const ChatMessages = styled.div``;
