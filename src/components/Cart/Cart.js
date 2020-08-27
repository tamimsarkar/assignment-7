import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart =props.cart
    const price = cart.reduce((sum,course) => sum +course.price,0)

    return (
        <div className='cart-section'>
            <h3>My Cart <span><i class="fas fa-cart-plus"></i></span> </h3>
            <div className="cart-item">
            <h3>Total Courses :  {cart.length}</h3>
        

            </div>
           <h4>Total Price : {price}</h4>
           <button className='btn btn-success checkout'>Checkout</button>
        </div>
    );
};

export default Cart;