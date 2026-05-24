import { useState } from "react";
import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ cart, onRemove, onPlaceOrder }) {
  const [promoInput, setPromoInput] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState(false);

  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  const handlePromo = () => {
    if (promoInput.trim().toUpperCase() === "PIZZA10") {
      setPromoApplied(true);
      setPromoError(false);
    } else {
      setPromoError(true);
      setPromoApplied(false);
    }
  };

  return (
    <div className="cart">
      <h2>🛒 Order</h2>

      {cart.length === 0 ? (
        <p className="empty-cart">Your cart is hungry 🍽️ — start adding pizzas!</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem key={item.cartId} item={item} onRemove={onRemove} />
            ))}
          </div>

          {/* Promo code box */}
          <div className="promo-box">
            <input
              className={`promo-input ${promoError ? "error" : ""} ${promoApplied ? "success" : ""}`}
              type="text"
              placeholder="Promo code..."
              value={promoInput}
              onChange={(e) => {
                setPromoInput(e.target.value);
                setPromoError(false);
              }}
              disabled={promoApplied}
            />
            <button
              className="promo-btn"
              onClick={handlePromo}
              disabled={promoApplied}
            >
              {promoApplied ? "✓" : "Apply"}
            </button>
          </div>

          {promoError && (
            <span className="promo-msg error-msg">❌ Invalid code!</span>
          )}
          {promoApplied && (
            <span className="promo-msg success-msg">🎉 PIZZA10 applied — 10% off!</span>
          )}

          {/* Total */}
          <div className="cart-total">
            {promoApplied && (
              <span className="discount-line">-${discount.toFixed(2)} off</span>
            )}
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>

          <button className="place-order-btn" onClick={() => onPlaceOrder(total)}>
            Place Order ✅
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;