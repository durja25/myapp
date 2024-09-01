import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Hello from './hellow';
import './index.css';
import MyProps from './myprops.jsx';
import MyState from './mystate.jsx';
import Product from './productcomp.jsx';
import reportWebVitals from './reportWebVitals';
import SimpleState from './simplestate.jsx';
import SampleStateProps from './simplestateprop.jsx';
import Student from './student.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));
// StrictMode is for object equivality
// root is available in index.html
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Hello /> */}
    {/* <Product /> */}
    {/* <MyState /> */}
    {/* <MyProps /> */}
    {/* <SimpleState /> */}
    {/* <Student /> Exercise */}
    <SampleStateProps />
  </React.StrictMode>
);

// When to use js and jsx
// jsx 
// jsx returns some HTML
// jsx is extention of js
// it is script where you will have power to write html as well as javascript
// js does not return anything

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// This file is main file of any React App
