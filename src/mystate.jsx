import React, { Component } from "react";

class MyState extends React.Component {
    constructor() {
        super();
        this.state = {
            mymessage: "Hello",
            num1: 10,
            num2: 20,
            result: 0
        }
    }
        ChangeData = () => {
            
            this.setState({ mymessage: "Good Morning, Welcome" });
        };
        render(){
            return (
                <div>
                    <h1> {this.state.mymessage}      </h1>
                    <button onClick={this.ChangeData}> Change Data</button>
                    <h1> {this.state.result}      </h1>
                    <button onClick={this.AddNumber}>  Add Number </button>
                </div>
                );
        }

        AddNumber = () => {
            this.setState({ result: this.state.num1 + this.state.num2 });
        }

    }



export default MyState