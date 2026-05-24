import { useState } from "react";
import "./Customizer.css";

const SIZES = [
  { label: "Small", emoji: "🐣", desc: "Just a snack", extra: 0 },
  { label: "Medium", emoji: "😋", desc: "Just right", extra: 3 },
  { label: "Large", emoji: "🤯", desc: "Go big or go home!", extra: 6 },
];

const TOPPINGS = [
  { name: "Extra Cheese", emoji: "🧀", price: 1.5 },
  { name: "Mushrooms", emoji: "🍄", price: 1 },
  { name: "Olives", emoji: "🫒", price: 1 },
  { name: "Jalapeños", emoji: "🌶️", price: 1 },
  { name: "Bacon", emoji: "🥓", price: 2 },
  { name: "Pineapple", emoji: "🍍", price: 1 },
];

function Customizer({ pizza, onAddToCart, onClose }) {
  const [size, setSize] = useState("Small");
  const [selectedToppings, setSelectedToppings] = useState([]);
  const [wobble, setWobble] = useState(false);

  const sizeExtra = SIZES.find((s) => s.label === size).extra;
  const toppingTotal = selectedToppings.reduce((sum, t) => sum + t.price, 0);
  const total = pizza.basePrice + sizeExtra + toppingTotal;

  const toggleTopping = (topping) => {
    setWobble(true);
    setTimeout(() => setWobble(false), 400);
    setSelectedToppings((prev) =>
      prev.find((t) => t.name === topping.name)
        ? prev.filter((t) => t.name !== topping.name)
        : [...prev, topping]
    );
  };

  const getMoodEmoji = () => {
    if (selectedToppings.length === 0) return { emoji: "😐", msg: "Pretty plain... add something!" };
    if (selectedToppings.length === 1) return { emoji: "🙂", msg: "Getting there!" };
    if (selectedToppings.length === 2) return { emoji: "😊", msg: "Looking tasty!" };
    if (selectedToppings.length === 3) return { emoji: "😍", msg: "Now we're talking!" };
    if (selectedToppings.length === 4) return { emoji: "🤩", msg: "Absolute unit of a pizza!" };
    return { emoji: "🤯", msg: "Are you even human?!" };
  };

  const mood = getMoodEmoji();

  const handleAdd = () => {
    onAddToCart({
      pizzaName: pizza.name,
      size,
      toppings: selectedToppings.map((t) => t.name),
      price: total,
    });
  };

  return (
    <div className="customizer-overlay">
      <div className="customizer">

        <button className="close-btn" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="customizer-header">
          <div className="pizza-big-emoji">{pizza.emoji}</div>
          <div>
            <h2>Build Your {pizza.name}</h2>
            <p className="customizer-sub">Make it yours, make it wild 🎨</p>
          </div>
        </div>

        {/* Mood meter */}
        <div className="mood-bar">
          <span className={`mood-emoji ${wobble ? "wobble" : ""}`}>{mood.emoji}</span>
          <span className="mood-msg">{mood.msg}</span>
        </div>

        {/* Size picker */}
        <div className="section-label">🍕 Pick Your Size</div>
        <div className="size-options">
          {SIZES.map((s) => (
            <button
              key={s.label}
              className={`size-btn ${size === s.label ? "active" : ""}`}
              onClick={() => setSize(s.label)}
            >
              <span className="size-emoji">{s.emoji}</span>
              <span className="size-name">{s.label}</span>
              <span className="size-desc">{s.desc}</span>
              <span className="size-price">
                {s.extra === 0 ? "Included" : `+$${s.extra}`}
              </span>
            </button>
          ))}
        </div>

        {/* Toppings */}
        <div className="section-label">✨ Load It Up</div>
        <div className="toppings-grid">
          {TOPPINGS.map((t) => {
            const selected = !!selectedToppings.find((x) => x.name === t.name);
            return (
              <button
                key={t.name}
                className={`topping-btn ${selected ? "selected" : ""}`}
                onClick={() => toggleTopping(t)}
              >
                <span className="topping-emoji">{t.emoji}</span>
                <span className="topping-name">{t.name}</span>
                <span className="topping-price">+${t.price.toFixed(2)}</span>
                {selected && <span className="checkmark">✓</span>}
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="customizer-footer">
          <div className="total-display">
            <span className="total-label">Your total</span>
            <span className="total-price">${total.toFixed(2)}</span>
          </div>
          <button className="add-to-cart-btn" onClick={handleAdd}>
            🛒 Add to Cart — ${total.toFixed(2)}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Customizer;