import React from 'react'
import styled from 'styled-components'
import {db}  from '../firebase';

function SidebarOption({Icon,title,addCahnnelOption})
 {

  
  // Adding the channels into database
   const addChannel=()=>{
     const channelname=prompt("Enter the channel name ");
     if(channelname){
       db.collection("rooms").add({
          name:channelname,
       });
     }
   };
    
    const SelectChannel=()=>{

    }
  return (
   <SidebarOptions onClick={addCahnnelOption ? addChannel : SelectChannel} >
    {/* Calling the Icons  */}
     {Icon && <Icon fontsize='small' style={{padding:10}}/>}
       {/* If icon not available below codecomes into play */}
     {Icon?(
        <h3>{title}</h3>
        ):(
            <SidebarChannel>
              <span>#</span>{title}
            </SidebarChannel>
        )}
   </SidebarOptions>
  )
}

export default SidebarOption;

const SidebarOptions=styled.div`
display:flex;
align-items:center;
padding-left:2px;
cursor:pointer;
font-size:12px;

:hover{
    opacity:0.9;
    background-color:#340e36;
}
> h3{
    font-weight:500;
}

> h3 > span {
    padding:15px;
}
`
const SidebarChannel=styled.h3`
 padding:10px;
 font-weight:500;
`
