import "./CartItem.css";

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <strong>{item.pizzaName}</strong>
        <span>{item.size}</span>
        {item.toppings.length > 0 && (
          <span className="toppings">{item.toppings.join(", ")}</span>
        )}
      </div>
      <div className="cart-item-right">
        <span>${item.price.toFixed(2)}</span>
        <button onClick={() => onRemove(item.cartId)}>🗑️</button>
      </div>
    </div>
  );
}

export default CartItem;