import React, { useContext, useState } from "react";
import "./Cart.css";
import { CartContext } from "./CartContext.jsx";

function Cart() {
  const { cartItems } = useContext(CartContext);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "", // add payment method
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(`Order submitted with payment method: ${formData.paymentMethod}`);
    // You can add further functionality here
  };

  return (
    <div className="cart-container">
      <h1>CheckOut</h1>
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              {/* Image on left */}
              <div className="cartimg">
                <img src={item.imageSrc} alt={item.name} />
              </div>

              {/* Details in middle */}
              <div className="cart-details">
                <p className="item-name">{item.name}</p>
                <p className="item-qty">Quantity: {item.quantity}</p>
              </div>

              {/* Price on right */}
              <div className="cart-price">
                <p>XAF {item.price * item.quantity}</p>
              </div>
            </div>
          ))}
          <h3 className="cart-total">Total: XAF {total}</h3>

          {/* Payment Method Selection */}
          <div className="payment-method">
            <h2>Select Payment Method</h2>

            <label>
              <input
                className="radio"
                type="radio"
                name="paymentMethod"
                value="MTN Money"
                checked={formData.paymentMethod === "MTN Money"}
                onChange={handleChange}
                required
              />
              MTN Money
            </label>

            <label>
              <input
                className="radio"
                type="radio"
                name="paymentMethod"
                value="Orange Money"
                checked={formData.paymentMethod === "Orange Money"}
                onChange={handleChange}
                required
              />
              Orange Money
            </label>

            <label>
              <input
                className="radio"
                type="radio"
                name="paymentMethod"
                value="Card"
                checked={formData.paymentMethod === "Card"}
                onChange={handleChange}
                required
              />
              Card
            </label>
          </div>

          {/* Form */}
          <form className="checkout-form" onSubmit={handleSubmit}>
            <h2>Delivery Details</h2>

            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>

            <label>
              Address:
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit">Place Order</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Cart;
