import React from 'react';
import {useState,createContext}from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Form from "./components/Form";
import Card from "./components/Card";
import './App.css';
export const AppContext=createContext(null);

function App() {
  const [location,setLocation]=useState("");
  
    return (
   <AppContext.Provider value={ {location,setLocation}}>
      <BrowserRouter> 
        <Header/>
        <Routes>
        <Route path='/' exact="true" element={<Form/>}/>
        <Route path='/display' exact="true" element={<Card/>}/>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
    );
  }
  
  export default App;
  