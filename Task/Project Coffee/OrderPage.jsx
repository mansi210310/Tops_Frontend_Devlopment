import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const OrderPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const coffee = location.state;

    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handlePlaceOrder = () => {
        navigate("/payment", { state: { coffee, quantity } }); // Navigate to PaymentPage with order details
    };

return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-10 rounded-lg shadow-lg text-center">
            <img src={coffee.image} alt={coffee.name} className="w-60 mx-auto" />
            <h2 className="text-3xl font-bold text-amber-900 mt-5">{coffee.name}</h2>
            <p className="text-xl text-gray-500 mt-2">${coffee.price.toFixed(2)}</p>

            {/* Quantity Buttons */}
            <div className="flex items-center justify-center mt-5">
            <button
                className="bg-red-400 text-white text-2xl px-4 py-2 rounded-l-lg"
                onClick={handleDecrease}
            >
                -
            </button>
            <span className="text-2xl px-6">{quantity}</span>
            <button
                className="bg-green-400 text-white text-2xl px-4 py-2 rounded-r-lg"
                onClick={handleIncrease}
            >
                +
            </button>
            </div>

            {/* Total Price */}
            <p className="text-xl font-semibold mt-4">
            Total: ${(coffee.price * quantity).toFixed(2)}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
            <button
                className="bg-gray-500 text-white px-6 py-3 rounded-lg"
                onClick={() => navigate("/menu")}
            >
                Back to Menu
            </button>
            <button
                className="bg-amber-500 text-white px-6 py-3 rounded-lg"
                onClick={handlePlaceOrder}
            >
                Place Order
            </button>
            </div>
        </div>
    </div>
);
};

export default OrderPage;
