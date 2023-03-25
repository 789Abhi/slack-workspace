import React from 'react'
import styled from 'styled-components'
function SidebarOption({Icon,title}) {
  return (
   <SidebarOptions>
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

`
const SidebarChannel=styled.div`

`
