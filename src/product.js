class Product
{
  pname="";
  pqty=0;
  prate=0;
    getAmount(pqty, prate) {
        console.log(pqty);
        console.log(prate)
        return pqty* prate;
    }
    getDiscount() {
        if(this.getAmount>5000)
        {
            return 10;
        }
        else
        {
            return 50;
        }
    }
 
}
export default Product;