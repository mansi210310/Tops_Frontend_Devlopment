import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { coffee, quantity } = location.state || {}; // Order details from OrderPage

    const [showAddressForm, setShowAddressForm] = useState(false);
    const [showPaymentOptions, setShowPaymentOptions] = useState(false);

    const [address, setAddress] = useState({
        fullName: "",
        mobileNumber: "",
        location: "",
        houseDetails: "",
        area: "",
    });

    const [paymentMethod, setPaymentMethod] = useState("");

    const handlePayment = () => {
        if (!address.fullName || !address.mobileNumber || !address.location || !address.houseDetails || !address.area) {
        alert("Please enter complete address");
        return;
        }
        if (!paymentMethod) {
        alert("Please select a payment method");
        return;
        }

        alert(`Payment successful via ${paymentMethod.toUpperCase()}`);
        navigate("/confirmation"); // Redirect to confirmation page
    };

return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
        <h1 className="text-4xl font-bold mb-6">Payment Details</h1>

        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            {/* Order Summary */}
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            {coffee && (
            <div className="text-center">
                <img src={coffee.image} alt={coffee.name} className="w-20 mx-auto" />
                <p className="text-lg font-bold">{coffee.name} x {quantity}</p>
                <p className="text-gray-500">${(coffee.price * quantity).toFixed(2)}</p>
            </div>
            )}

            {/* Address Section */}
            <button
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
            onClick={() => setShowAddressForm(!showAddressForm)}
            >
            {showAddressForm ? "Hide Address Form" : "Enter Address"}
            </button>

            {showAddressForm && (
            <div className="mt-4">
                <input
                type="text"
                placeholder="Full Name"
                className="w-full p-2 border rounded-lg mb-2"
                value={address.fullName}
                onChange={(e) => setAddress({ ...address, fullName: e.target.value })}
                />
                <input
                type="tel"
                placeholder="Mobile Number"
                className="w-full p-2 border rounded-lg mb-2"
                value={address.mobileNumber}
                onChange={(e) => setAddress({ ...address, mobileNumber: e.target.value })}
                />
                {/* <button
                className="w-full bg-gray-300 text-black py-2 px-4 rounded-lg mb-2"
                onClick={() => alert("Fetching Live Location...")}
                >
                Add Location on Map
                </button> */}
                <input
                type="text"
                placeholder="House No., Building, Apartment"
                className="w-full p-2 border rounded-lg mb-2"
                value={address.houseDetails}
                onChange={(e) => setAddress({ ...address, houseDetails: e.target.value })}
                />
                <input
                type="text"
                placeholder="Area, Sector"
                className="w-full p-2 border rounded-lg mb-2"
                value={address.area}
                onChange={(e) => setAddress({ ...address, area: e.target.value })}
                />
            </div>
            )}

            {/* Payment Section */}
            <button
            className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            onClick={() => setShowPaymentOptions(!showPaymentOptions)}
            >
            {showPaymentOptions ? "Hide Payment Methods" : "Choose Payment Method"}
            </button>

            {showPaymentOptions && (
            <div className="mt-4 flex flex-col gap-3">
                {["gpay", "paytm", "cod", "bob", "sbi", "hdfc", "axis"].map((method) => (
                <label key={method} className="flex items-center gap-2">
                    <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    {method.toUpperCase()}
                </label>
                ))}
            </div>
            )}

            {/* Proceed Button */}
            <button
            onClick={handlePayment}
            className="mt-6 w-full bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600"
            >
            Proceed to Pay
            </button>
        </div>
    </div>
);
};

export default PaymentPage;
