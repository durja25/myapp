import './App.css';
import logo from './logo.svg';

function App() {
  const message = "Hello World"; //const name = "John";
  const address = {
    area : "Pune",
    state : "Maharashtra"
  }
  const emplist=[
    {
      name:"Prajkata",
      dept:"Devloper",
      salary:999999
    },
    {
      name:"Amit",
      dept:"Devloper",
      salary:999999
    },
    {
      name:"Suman",
      dept:"Devloper",
      salary:999999
    }
 
  ]
  return (
    <div>
      <div className="App">
        <h1>Wellcome to React</h1>
        <h2>Hello {message}</h2>
        <p>Address : {address.area}, {address.state}</p>
        <p>{getdata()}</p>
        <p>{addNumber(2,3)}</p>
        <p>{2*3}</p>
      </div>
      {/* <p>Second div </p> */}
      {
      emplist.map(
        function (emp) 
        { 
          return <p>{emp.name} {emp.dept} {emp.salary}</p> 
        }
      )
      }
      
      {/* {
      emplist.map(
        (emp) => <p>{emp.name} {emp.dept} {emp.salary}</p>
      )
      } */}
    </div>
  );
}

export default App;

function getdata(){
  return "Hello";
}

function addNumber(a,b){
  return a+b;
}