import Product from "./product";
 
function Poductcomp()
{
   
   
    const p = new Product();
     p.pname="Mobile";
     p.pqty=40;
     p.prate=40;
   
    return(
        <div>
        <h1> {p.pname} </h1>
        <h1> {p.pqty} </h1>
        <h1> {p.prate} </h1>
        <h1>{ p.getAmount(p.pqty,p.prate) }</h1>
        <h1>{ p.getDiscount() }</h1>
        </div>
 
      )
}
 
 
export default Poductcomp