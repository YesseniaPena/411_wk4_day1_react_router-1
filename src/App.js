import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from "./components/Navigation";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
  <BrowserRouter>
      <Navigation />
      <Router />
    </BrowserRouter>
    </div>
    // render:(react.ReactNode)
   
  );
}
export default App