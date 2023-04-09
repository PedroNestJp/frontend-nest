import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Produto 1', price: 10 },
    { id: 2, name: 'Produto 2', price: 20 },
    { id: 3, name: 'Produto 3', price: 30 },
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div>
      <h2>Produtos</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - R${product.price.toFixed(2)}
            <button onClick={() => addToCart(product)}>Adicionar ao carrinho</button>
          </li>
        ))}
      </ul>
      <h2>Carrinho de compras</h2>
      <ul>
        {cart.map(product => (
          <li key={product.id}>
            {product.name} - R${product.price.toFixed(2)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
