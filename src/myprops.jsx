import React from 'react';
 
 
class MyProps extends React.Component{
    render() {
      return (
         <div>
            <h1>{this.props.CompanyName}</h1>
            <h2>{this.props.CompanyAddress}</h2>
            <h3>{this.props.EmailAddress}</h3>
            <h3>{this.props.MobileNumber}</h3>
         </div>
      );
   }
}
 
export default MyProps;
 
MyProps.defaultProps= {
    CompanyName: "MPower Consultrainers Pvt Ltd",
    CompanyAddress:"Hi",
    EmailAddress:"kavita.mpowerconsultrainers.com",
    MobileNumber:9323605009
 }