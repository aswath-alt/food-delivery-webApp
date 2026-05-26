import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart } =
    useContext(StoreContext);

  const cartTotal = food_list.reduce((total, item) => {
    if (cartItems[item._id] > 0) {
      return total + item.price * cartItems[item._id];
    }
    return total;
  }, 0);

  if (cartTotal === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <p>Add items to continue shopping</p>
      </div>
    );
  }

  return (
    <div className="cart">

      {/* LEFT SIDE */}
      <div className="cart-left">

        {/* TABLE HEADER */}
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr />

        {/* ITEMS */}
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div
                key={item._id}
                className="cart-items-title cart-items-item"
              >
                <img src={item.image} alt={item.name} />

                <p>{item.name}</p>

                <p>${item.price}</p>

                <p>{cartItems[item._id]}</p>

                <p>
                  ${item.price * cartItems[item._id]}
                </p>

                <p
                  className="cross"
                  onClick={() => removeFromCart(item._id)}
                >
                  ×
                </p>
              </div>
            );
          }
          return null;
        })}

        {/* PROMO CODE */}
        <div className="cart-promocode">
          <p>Have a promo code?</p>

          <div className="cart-promocode-input">
            <input type="text" placeholder="Enter code" />
            <button>Apply</button>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="cart-right">

        <div className="cart-total">
          <h2>Cart Summary</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${cartTotal}</p>
          </div>

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${cartTotal === 0 ? 0 : 5}</p>
          </div>

          <hr />

          <div className="cart-total-details total">
            <b>Total</b>
            <b>${cartTotal === 0 ? 0 : cartTotal + 5}</b>
          </div>

           <Link to='/order'><button
            disabled={cartTotal === 0}
          >
            PROCEED TO CHECKOUT
          </button></Link>

        </div>

      </div>

    </div>
  );
};

export default Cart;