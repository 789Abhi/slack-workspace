import React from "react";
import "./App.css";
import Header from "./components/Header";
import styled from "styled-components";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Spinner from 'react-spinkit'
function App() {
  // making login authentication
  const [user,loading] = useAuthState(auth);   //--> This takes care all the Google Authentication parts
  if (loading)
  {
    return(
      <AppLoading>
        <AppLoadingContents>
        <img src="https://luna1.co/dc739c.png" alt="" />
        <Spinner name='ball-spin-fade-loader' color='purple' fadeIn='none'/>
        </AppLoadingContents>
      </AppLoading>
    )
  }
  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" exact element={<Chat />}></Route>
              </Routes>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}
export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
const AppLoading=styled.div`
  display:grid;
  place-items:center;
  height:100vh;
  width:100%;
`
const AppLoadingContents=styled.div`
text-align:center;
padding-bottom:100px;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

> img{
  height:100px;
  padding:20px;
  margin-bottom:40px;
}
`