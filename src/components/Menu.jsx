import pizzas from "../data/pizzas";
import PizzaCard from "./PizzaCard";
import "./Menu.css";

function Menu({ onSelectPizza }) {
  return (
    <section className="menu">
      <h2>Our Menu</h2>
      <div className="menu-grid">
        {pizzas.map((pizza) => (
          <PizzaCard key={pizza.id} pizza={pizza} onSelectPizza={onSelectPizza} />
        ))}
      </div>
    </section>
  );
}

export default Menu;