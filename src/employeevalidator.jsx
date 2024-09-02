import PropTypes from "prop-types";
import React from "react";

export default class EmployeeValidator extends React.Component {

    render() {
        return (
           <div>
             
              <h3>Employees Name: {this.props.EmployeeName}</h3>
              <h3>Age: {this.props.EmployeeAge}</h3>
              <h3>Salary: {this.props.calculateSalary(25)}</h3>
              <h3>Bool: {this.props.isActive ? "True..." : "False..."}</h3>
              <h3>Department: {this.props.EmployeeDept}</h3>
              <h3>Employees Address: {this.props.address.area}</h3>
           
              <h3> City: {this.props.address.state}</h3>
           </div>
        );
     }

}

EmployeeValidator.propTypes = {
    EmployeeName: PropTypes.string.isRequired,
    EmployeeAge: PropTypes.number,
    EmployeeDept: PropTypes.string.isRequired,
    calculateSalary: PropTypes.func,
    isActive: PropTypes.bool.isRequired,
    address: PropTypes.object
}

EmployeeValidator.defaultProps = {
    EmployeeName: "Employee",
    EmployeeDept: "IT",
    calculateSalary: function (att) {
       return att*2500
    },
    EmployeeAge: 20,
    isActive: true,
    address: {
        area : "Pune",
        state : "Maharashtra"
    }
}