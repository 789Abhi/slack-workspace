import React from 'react';
import './App.css';
import Header from './Header';
import styled from 'styled-components'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <AppBody>
          <Routes>
            <Route path='/' exact>
            
            </Route>
          </Routes>
        </AppBody>

      </Router>
    </div>
  );
}
export default App;

const AppBody=styled.div`

`