# 🍕 Pizza Palace Kiosk

A self-service pizza ordering kiosk built with React + Vite.

## How to Run
1. Clone the repo:
   git clone https://github.com/Rj-lang-dot/pizza-kiosk.git

2. Install dependencies:
   cd pizza-kiosk
   npm install

3. Start the app:
   npm run dev

4. Open your browser at:
   http://localhost:5173

## Features
- Browse a menu of 5 pizzas
- Customize size (Small / Medium / Large)
- Add toppings (Extra Cheese, Mushrooms, Olives, Jalapeños, Bacon, Pineapple)
- Add pizzas to cart
- Remove items from cart
- Place order with confirmation screen and random order number

## Stretch Goals Attempted
- Mood meter that reacts as you add toppings
- Animations (spin-in, wobble, slide-in)
- Modern Forest Green theme

## One Tricky Thing I Solved
The customizer was opening as a modal overlay and cutting off.
I fixed it by removing the overlay and making it a side panel
inside the flex layout using max-width and overflow-y: auto.