import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ cart, onRemove, onPlaceOrder }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

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
        <div className="cart-total">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
        <button className="place-order-btn" onClick={onPlaceOrder}>
          Place Order ✅
        </button>
      </>
    )}
  </div>
);
}

export default Cart;