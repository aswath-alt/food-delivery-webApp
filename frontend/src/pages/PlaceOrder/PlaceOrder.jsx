import React, { useContext } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../context/StoreContext';

const PlaceOrder = () => {

  const { food_list, cartItems } = useContext(StoreContext);

  const subtotal = food_list.reduce((total, item) => {
    if (cartItems[item._id] > 0) {
      return total + item.price * cartItems[item._id];
    }
    return total;
  }, 0);

  const deliveryFee = subtotal === 0 ? 0 : 5;
  const total = subtotal + deliveryFee;

  return (
    <div className="place-order">

      {/* LEFT - FORM */}
      <div className="place-order-left">

        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>

        <input type="email" placeholder="Email address" />
        <input type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>

        <input type="text" placeholder="Phone" />

      </div>

      {/* RIGHT - SUMMARY */}
      <div className="place-order-right">

        <div className="cart-total">

          <h2>Order Summary</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${subtotal}</p>
          </div>

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${deliveryFee}</p>
          </div>

          <hr />

          <div className="cart-total-details total">
            <b>Total</b>
            <b>${total}</b>
          </div>

          <button>PLACE ORDER</button>

        </div>

      </div>

    </div>
  );
};

export default PlaceOrder;