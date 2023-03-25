import React from 'react';
import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path='/' element={<h1>welcome Home</h1> }></Route>
      <Route path='/header' element={<Header/>}></Route>
      </Routes>
      </Router>
    
    </div>
  );
}

export default App;
