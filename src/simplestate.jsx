import React, { Component } from 'react';
class SimpleState extends React.Component {  
 constructor() {  
      super();        
      this.state = {
        displayData: false,
        myData:'Hello'
       };  
      console.log('Component this', this);  
     
      this.toggleDisplayData = this.toggleDisplayData.bind(this);  
      }  
      toggleDisplayData(){  
       
          this.setState({displayData: !this.state.displayData});  
          }  
       
     ChangeData=()=> {  
           this.setState({myData:'Changed'});  
      }
      render() {  
          return (  
              <div>
              <div>  
              <h1> {  this.state.myData} </h1>
                   <button onClick={this.ChangeData}>change ME </button>  
              </div>  
                  <h1>Check Placement Notice</h1>  
                  {  
                      this.state.displayData ?  (  
                          <div>  
                              <p><h4>Every Student Must Complete Three Projects</h4></p>  
                              <p><h4>Every Student Must Clear the Mocks </h4></p>  
                              <p><h4>Every Student Must have 80% Attendece</h4></p>  
                              <button onClick={this.toggleDisplayData}> Show Less </button>  
                        </div>  
                          ): (  
                              <div>  
                                  <button onClick={this.toggleDisplayData}> Read More </button>  
                              </div>  
                          )  
                  }  
             </div>  
        )  
    }  
}  
export default SimpleState;