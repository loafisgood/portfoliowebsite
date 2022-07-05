import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import { ChakraProvider } from '@chakra-ui/react'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

 
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/header" element={<Header/>}/>
      <Route path="/Timeline" element={<Timeline/>}/>
      <Route path={"/Contact"} element={<Contact/>}/>
    </Routes>
  </BrowserRouter>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
