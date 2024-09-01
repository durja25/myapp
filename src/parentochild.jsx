import React from 'react';
export class Parentochild extends React.Component
{
    render()
    {
        var coname = "Mpower Consultrainers";
        var today = new Date().toLocaleDateString();
        return(
            <div>
                <h1>Parent Component</h1>
                <ChildComponent coname={coname} today={today}/>
            </div>
        )
    }
}

class ChildComponent extends React.Component
{
    render()
    {
        return(
            <div>
                <h1>Child Component</h1>
                <h1>{this.props.coname}</h1>
                <h1>{this.props.today}</h1>
            </div>
        )
    }
}