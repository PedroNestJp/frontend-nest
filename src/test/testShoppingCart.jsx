import React, { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Produto 1', price: 10, quantity: 0 },
    { id: 2, name: 'Produto 2', price: 20, quantity: 0 },
    { id: 3, name: 'Produto 3', price: 30, quantity: 0 },
  ]);

  const [total, setTotal] = useState(0);

  const handleIncrement = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setItems(newItems);
    setTotal(total + getItemPrice(id));
  };

  const handleDecrement = (id) => {
    const newItems = items.map(item => {
      if (item.id === id && item.quantity > 0) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setItems(newItems);
    setTotal(total - getItemPrice(id));
  };

  const getItemPrice = (id) => {
    const item = items.find(item => item.id === id);
    return item ? item.price : 0;
  };

  return (
    <div>
      <h2>Carrinho de compras</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - Quantidade: {item.quantity} - Preço: {item.price * item.quantity}
            <button onClick={() => handleIncrement(item.id)}>+</button>
            <button onClick={() => handleDecrement(item.id)}>-</button>
          </li>
        ))}
      </ul>
      <h3>Total: {total}</h3>
    </div>
  );
}

export default ShoppingCart;
