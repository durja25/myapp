import React from 'react';
 
class SampleStateProps extends React.Component
{
    constructor(props) {
      super(props);
      this.state = {
         header1: " Company name is Mpower Consultrainers...",
         header2: "Training Program...",
         footer1: "Copy right!!!! All Rights reserve with .....",
         footer2: "Additonal Footer"
      }
   }
    render() {
        var bottomStyle = {
            position: 'absolute',
            bottom: '0',
            align: 'bottom',
            width: '100%',
        }
      return (
         <div>
            <Header header_Prop = {this.state.header1}/>
            <Header header2Prop = {this.state.header2}/>
            <hr/>
            <h1> This is our main content</h1>
            <hr/>
            <Footer style={bottomStyle} foot1 = {this.state.footer1}/>
            <Footer style={bottomStyle}  foot2 = {this.state.footer2}/>
 
          
         </div>
      );
   }
}
 
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1 >{this.props.header_Prop}</h1>
              <h1>{this.props.header2Prop}</h1>
         </div>
      );
   }
}
class Footer extends React.Component {
   render() {
      return (
         <div>
            <h2>{this.props.foot1}</h2>
             <h2>{this.props.foot2}</h2>
         </div>
      );
   }
}
 
 
export default SampleStateProps;
 