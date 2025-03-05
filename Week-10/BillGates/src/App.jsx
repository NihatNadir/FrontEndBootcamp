import { useState, useEffect } from 'react';
import './App.css';
import Card from "./components/card/Card";
import products from "./data/products";

function App() {
  const [balance, setBalance] = useState(100000000000);
  const [targetBalance, setTargetBalance] = useState(100000000000);
  const [cart, setCart] = useState({});

  // **Bakiye değişimini yavaşlatan animasyon**
  useEffect(() => {
    if (balance !== targetBalance) {
      const step = Math.ceil(Math.abs(targetBalance - balance) / 25); // Küçük adımlarla değişim
      const interval = setInterval(() => {
        setTargetBalance((prev) => {
          if (prev > balance) return Math.max(prev - step, balance);
          if (prev < balance) return Math.min(prev + step, balance);
          return prev;
        });
      }, 10);

      return () => clearInterval(interval);
    }
  }, [balance, targetBalance]); // balance or targetBalance changes, trigger animation

  const updateCart = (product, quantity) => {
    const newQuantity = Math.max(0, quantity);
    const currentQuantity = cart[product.id] || 0;

    // **Alınmak istenen toplam fiyat farkını hesapla**
    const costDifference = (newQuantity * product.price) - (currentQuantity * product.price);

    // **Bakiye yeterliyse işlemi yap**
    if (balance - costDifference >= 0) {
      setBalance(balance - costDifference); // Update balance directly (no animation)
      setCart((prevCart) => {
        const updatedCart = { ...prevCart, [product.id]: newQuantity };
        if (newQuantity === 0) delete updatedCart[product.id]; // Remove item if quantity is 0
        return updatedCart;
      });
    } else {
      // Yetersiz bakiye ise işlem yapılmasın, sadece max quantity'yi sınırla
      const maxQuantity = Math.floor(balance / product.price);
      if (newQuantity > maxQuantity) {
        setQuantity(maxQuantity);
      }
    }
  };

  const totalSpent = Object.entries(cart).reduce((total, [productId, quantity]) => {
    const product = products.find(p => p.id === Number(productId));
    return total + (product.price * quantity);
  }, 0);

  return (
    <div className="container">
      <div className="sticky-header">
        <h1 className="balance-text">Balance: ${targetBalance.toLocaleString()}</h1> {/* Display targetBalance for animation */}
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <Card
            key={product.id}
            product={product}
            balance={balance}
            cart={cart}
            updateCart={updateCart} // Pass the updateCart function to Card
          />
        ))}
      </div>

      {/* **Sepet Bilgileri** */}
      <div className="cart-summary">
        <h2>Purchased Items</h2>
        {Object.entries(cart).length === 0 ? (
          <p>No items purchased yet.</p>
        ) : (
          <>
            <ul>
              {Object.entries(cart).map(([productId, quantity]) => {
                if (quantity > 0) {
                  const product = products.find(p => p.id === Number(productId));
                  return (
                    <li key={product.id}>
                      {product.name} x {quantity} (${(product.price * quantity).toLocaleString()})
                    </li>
                  );
                }
                return null;
              })}
            </ul>
            {/* **Toplam Harcama Alanı** */}
            <p className="total-spent">
              <strong>Total Spent:</strong> ${totalSpent.toLocaleString()}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default App;