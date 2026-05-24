import { useState } from "react";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Customizer from "./components/Customizer";
import Confirmation from "./components/Confirmation";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [selectedPizza, setSelectedPizza] = useState(null); // for customizer
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState(null);

  const handleAddToCart = (cartItem) => {
    setCart([...cart, { ...cartItem, cartId: Date.now() }]);
    setSelectedPizza(null); // close customizer
  };

  const handleRemoveFromCart = (cartId) => {
    setCart(cart.filter((item) => item.cartId !== cartId));
  };

  const handlePlaceOrder = () => {
    setOrderNumber(Math.floor(Math.random() * 9000) + 1000);
    setOrderPlaced(true);
    setCart([]);
  };

  const handleNewOrder = () => {
    setOrderPlaced(false);
    setOrderNumber(null);
  };

  if (orderPlaced) {
    return <Confirmation orderNumber={orderNumber} onNewOrder={handleNewOrder} />;
  }

  return (
  <div className="app">
    <header className="app-header">
      <h1>🍕 Pizza Palace</h1>
      <p>Fresh. Hot. Yours.</p>
    </header>

    <div className="app-body">
      <Menu onSelectPizza={setSelectedPizza} />

      {selectedPizza && (
        <Customizer
          pizza={selectedPizza}
          onAddToCart={handleAddToCart}
          onClose={() => setSelectedPizza(null)}
        />
      )}
    </div>

    <Cart
      cart={cart}
      onRemove={handleRemoveFromCart}
      onPlaceOrder={handlePlaceOrder}
    />
  </div>
);
}

export default App;