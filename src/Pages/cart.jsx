import React, { useContext, useState } from "react";
// using TailwindCSS classes instead of a separate stylesheet
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
  <div className="w-full min-h-screen bg-gray-100 px-4 py-6 sm:px-6 md:px-10">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center sm:text-left">
        Checkout
      </h1>

      <h2 className="text-xl font-semibold mb-6 text-center sm:text-left">
        Your Cart
      </h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600">No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 mb-6 p-4 bg-white rounded-xl shadow-md"
            >
              {/* Image */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 flex-shrink-0 flex items-center justify-center bg-gray-50 rounded-lg overflow-hidden">
                <img
                  src={item.imageSrc}
                  alt={item.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="flex-1 text-center sm:text-left">
                <p className="text-lg font-semibold">{item.name}</p>
                <p className="text-green-700 font-medium">
                  Quantity: {item.quantity}
                </p>
              </div>

              {/* Price */}
              <div className="text-lg font-bold text-right w-full sm:w-auto">
                XAF {(item.price * item.quantity).toLocaleString()}
              </div>
            </div>
          ))}

          <div className="text-right text-2xl font-bold mb-8">
            Total: XAF {total.toLocaleString()}
          </div>

          {/* Payment Method */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-3">
              Select Payment Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {["MTN Money", "Orange Money", "Card"].map((method, index) => (
                <label
                  key={method}
                  className={`flex items-center justify-center gap-2 p-3 border rounded-lg cursor-pointer transition
                  ${
                    formData.paymentMethod === method
                      ? "bg-green-100 border-green-500"
                      : "bg-white"
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method}
                    checked={formData.paymentMethod === method}
                    onChange={handleChange}
                    required={index === 0}
                    className="hidden"
                  />
                  <span className="font-medium">{method}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Delivery Form */}
          <form
            className="grid grid-cols-1 gap-4 w-full"
            onSubmit={handleSubmit}
          >
            <h2 className="text-lg font-semibold">Delivery Details</h2>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg w-full"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg w-full"
            />

            <input
              type="text"
              name="address"
              placeholder="Delivery Address"
              value={formData.address}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-lg w-full"
            />

            <button
              type="submit"
              className="mt-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            >
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  </div>
);
}

export default Cart;
