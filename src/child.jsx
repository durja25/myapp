import React from "react";
 
 
class Child extends React.Component {
    // Function triggered when the form is submitted
    onTrigger = (event) => {
        console.log('1. child  got triggered')
        // Call the parent callback function
        this.props.parentCallback(
           
            event.target.myname.value
        );
        event.preventDefault();
        //Utilized within event handlers, it lets you control the default actions the browser typically executes.
        // This control over events, specifically form
        // submissions, is essential for creating a dynamic
        // and responsive React app
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onTrigger}>
                    <input  type="text" name="myname"
                        placeholder="Enter Name"
                    />
                    <br/>
                    <input type="submit" value="Submit" />
                    <br/>
                </form>
            </div>
        );
    }
}
export default Child;
 
 
// Creating child class
// input textbox
// input submit
 
// on click of submit button --
// child is invoking the event callback to the parent as props
 
 