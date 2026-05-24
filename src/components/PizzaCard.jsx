import "./PizzaCard.css";

function PizzaCard({ pizza, onSelectPizza }) {
  return (
    <div className="pizza-card">
      <div className="pizza-emoji">{pizza.emoji}</div>
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <p className="pizza-price">From ${pizza.basePrice}</p>
      <button onClick={() => onSelectPizza(pizza)}>Add to Order</button>
    </div>
  );
}

export default PizzaCard;