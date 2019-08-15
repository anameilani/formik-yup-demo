import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom"
import FormRegister from './formRegister'
import FormRegisterFormik from './formRegisterFormik';

function App() {
  return (
    <div className="App">
     <Router>
        <Route exact path="/" component={FormRegisterFormik} />
        <Route path="/register" component={FormRegister}/>
     </Router>
    </div>
  );
}

export default App;
