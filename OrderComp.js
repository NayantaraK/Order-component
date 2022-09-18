import './OrderComp.css';

const OrderComp = () => {
    return ( 
        <div id="parent">
        <div id="left">
        <div className="row">
            <div className="column info-left">                
                <p>Contact Number</p>   
                <hr></hr>             
            </div>
            <div className="column info-right">               
                <p>+91 9082040495</p>
                <hr></hr>
            </div>
            </div>
            <div className="address-container">
            <p>Address</p>                
                Ispat Bhavan, Lodhi Road, NEW DELHI-110003, INDIA                    
            </div>
        </div>
        
        <div id="right">
        <div className="centered">            
            <div className='order-products'>
            <div className="cart-row title">
                <span className="cart-item cart-header cart-column">PRODUCT</span>
                <span className="cart-price cart-header cart-column">QUANTITY</span>
                <span className="cart-quantity cart-header cart-column">PRICE</span>
             </div>
             
             <div className="cart-row prod">
                <span className="cart-item cart-header cart-column">Nutella Brownie</span>
                <span className="cart-price cart-header cart-column">1</span>
                <span className="cart-quantity cart-header cart-column">₹ 149</span>
             </div>

             <div className="cart-row prod">
                <span className="cart-item cart-header cart-column">Butterscotch Cake</span>
                <span className="cart-price cart-header cart-column">2</span>
                <span className="cart-quantity cart-header cart-column">₹ 998</span>
             </div>       
             </div>
            <div className="total">
                    <span className="cart-item cart-header cart-column total-col">Total</span>
                    <span className="cart-item cart-header cart-column total-col"></span>
                    <span className="cart-price cart-header cart-column total-col1">₹ 1147</span>
            </div>
            
        </div>
        </div>
      </div>

     );
}
 
export default OrderComp;