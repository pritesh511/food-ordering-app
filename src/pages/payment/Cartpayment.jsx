import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
);

const Cartpayment = () => {
  const options = {
    mode: "payment",
    currency: "usd",
    amount: 1099,
  };
  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default Cartpayment;
