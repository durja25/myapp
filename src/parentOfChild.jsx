import React from "react";
import Child from "./child";
 
export default class ParentOfChild extends React.Component {
    state = {
        name: ""
    };
    // Callback function to handle data received from the child component
    handleCallback = (childData) => {
        // Update the name in the component's state
        console.log('2. parent  got triggered'+ childData);
        this.setState({ name: childData });
    };
    render() {
        const { name } = this.state;
        return (
            <div>
                <Child  parentCallback={this.handleCallback}/>
                <p>   This is the parent component {name} </p>
            </div>
        );
    }
}
 
 
 