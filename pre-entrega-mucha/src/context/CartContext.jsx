import { createContext, useEffect, useState } from "react";

// Creacion del contexto
export const CartContext = createContext(null);

//Aca creamos el Provider
export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const addItem = (item, quantity) => {
    // Aca creamos una copia del cart
    const cartCopy = [...cart];
    // Verificamos si el item ya se encuentra en el carrito
    const index = cartCopy.findIndex((product) => product.id === item.id);

    if (index != -1) {
      cartCopy[index].quantity = cartCopy[index].quantity + quantity;
      cartCopy[index].subTotal =
        cartCopy[index].price * cartCopy[index].quantity;
      setCart(cartCopy);
    } else {
      // Si da -1 es por que el producto no se encuentra en el carrito

      // Aca armamos el objeto del item para guardar en el cart
      const newItem = {
        ...item,
        quantity,
        subTotal: item.price * quantity,
      };

      // Hacemos una copia del cart actual y agregamos el nuevo item
      setCart([...cart, newItem]);
    }
  };

  const removeItem = (id) => {
    // Quitar un producto del carrito

    const cartFilter = cart.filter((item) => item.id !== id);
    setCart(cartFilter);
  };

  const clearCart = () => {
    // Limpiar el carrito
    setCart([]);
  };

  const handleTotalPrice = () => {
    const newTotalPrice = cart.reduce((acum, item) => acum + item.subTotal, 0);
    setTotalPrice(newTotalPrice);
  };

  const handleTotalItems = () => {
    const newTotalItems = cart.reduce((acum, item) => acum + item.quantity, 0);
    setTotalItems(newTotalItems);
  };

  useEffect(() => {
    handleTotalItems();
    handleTotalPrice();
  }, [cart]);

  const objectValues = {
    cart,
    totalItems,
    totalPrice,
    addItem,
    removeItem,
    clearCart,
  };

  return (
    <CartContext.Provider value={objectValues}>
      {" "}
      {children}{" "}
    </CartContext.Provider>
  );
};
