import React, { Component } from 'react';

// first Exercise
class Student extends React.Component {
    constructor() {
        super();
        this.state = {
            Name: "Test",
            Class: "XI",
            Maths: 90,
            Science: -40,
            Total: 0,
            Grade: "C"
        };
        console.log('Component this', this);

    }


    CanculateTotal = () => {
        // if you want to write logic then first write it first and then write setState
        const total = this.state.Maths + this.state.Science;
        const grade = total > 75 ? "A" : total < 75 && total > 60 ? "B" : "C";
        this.setState({ Total: total, Grade: grade });
    }
    render() {
        var redStyle = {
            fontSize: 100,
            color: '#FF0000'
        }
        var greenStyle = {
            fontSize: 100,
            color: '#00FF00'
        }
        var yellowStyle = {
            fontSize: 100,
            color: '#FFFF00'
        }
        return (
            <div>
                <div>
                    <h1 style={this.state.Total > 75 ? greenStyle : this.state.Total < 75 && this.state.Total > 60 ? yellowStyle : redStyle}> {this.state.Grade} </h1>
                    <button onClick={this.CanculateTotal}> Canculate </button>
                </div>
                {/* <h1>Check Grade</h1>
                {this.state.Total > 75 ? (
                    <div>
                        <h1 style={greenStyle}> {this.state.Grade} </h1>
                    </div>
                ) : this.state.Total < 75 && this.state.Total > 60 ? (
                    <div>
                        <h1 style={yellowStyle}> {this.state.Grade} </h1>
                    </div>
                ) : (
                    <div>
                        <h1 style={redStyle}> {this.state.Grade} </h1>
                    </div>
                )} */}
            </div>
        )
    }
}
export default Student;