import "./Confirmation.css";

function Confirmation({ orderNumber, orderTotal, onNewOrder }) {
  return (
    <div className="confirmation">
      <h1>🎉 Order Placed!</h1>
      <p>Your order number is</p>
      <h2 className="order-number">#{orderNumber}</h2>
      <p>Amount paid: <strong style={{color: "#3a6b4a"}}>${orderTotal.toFixed(2)}</strong></p>
      <p>We're baking your pizza right now! 🍕🔥</p>
      <button onClick={onNewOrder}>Start New Order</button>
    </div>
  );
}

export default Confirmation;