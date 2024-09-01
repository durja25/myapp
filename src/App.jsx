import React from "react";

class App extends React.Component {
    render() {
       var myStyle = {
          fontSize: 100,
          color: '#FF0000'
       }
       return (
          <div>
             <h1 style = {myStyle}>Header</h1>
  
             <h1 style={myStyle}>  Hello Everyone</h1>
          </div>
       );
    }// render
 }
 export default App; 