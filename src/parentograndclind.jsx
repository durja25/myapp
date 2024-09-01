import React from "react";


export default class Parent extends React.Component{

    render(){

        return(
                <Employee salary='50000'/>
        )
    }
}
// 
function Employee(props){
return(
    <div>
        <PrintChild netsalary={parseInt(props.salary)+5000}/>
    </div>
)

}

class PrintChild extends React.Component{
    render(){
        return(
            <div>
                <h1>Net salary is {this.props.netsalary}</h1>
            </div>
        )
    }
}