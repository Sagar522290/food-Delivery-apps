import React, {
  createContext,
  useContext,
  useState,
} from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (food) => {
    const normalizedFood = {
      ...food,
      quantity: food.quantity ?? food.qty ?? 1,
      price: Number(food.price) || 0,
    };

    setCart((previousCart) => {
      const existing = previousCart.find(
        (item) => item.id === normalizedFood.id
      );

      if (existing) {
        return previousCart.map((item) =>
          item.id === normalizedFood.id
            ? {
                ...item,
                quantity: Number(item.quantity || item.qty || 0) + 1,
              }
            : item
        );
      }

      return [...previousCart, normalizedFood];
    });
  };

  const updateQty = (id, delta) => {
    setCart((previousCart) =>
      previousCart
        .map((item) => {
          if (item.id !== id) return item;

          const nextQty = Math.max(
            0,
            Number(item.quantity ?? item.qty ?? 0) + delta
          );

          return {
            ...item,
            quantity: nextQty,
          };
        })
        .filter((item) => Number(item.quantity ?? item.qty ?? 0) > 0)
    );
  };

  const increase = (id) => updateQty(id, 1);
  const decrease = (id) => updateQty(id, -1);

  const removeFromCart = (id) => {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const items = cart.map((item) => ({
    ...item,
    qty: Number(item.quantity ?? item.qty ?? 1),
  }));

  const itemTotal = items.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.qty),
    0
  );

  const deliveryFee = items.length > 0 ? 40 : 0;
  const packagingFee = items.length > 0 ? 15 : 0;
  const totalAmount = itemTotal + deliveryFee + packagingFee;

  const count = items.reduce((sum, item) => sum + Number(item.qty), 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        items,
        addToCart,
        increase,
        decrease,
        updateQty,
        removeFromCart,
        clearCart,
        total: itemTotal,
        itemTotal,
        deliveryFee,
        packagingFee,
        totalAmount,
        count,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};