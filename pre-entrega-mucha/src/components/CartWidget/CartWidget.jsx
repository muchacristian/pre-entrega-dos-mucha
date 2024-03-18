import { useContext } from "react";
import carrito from "./assets/cart-fill.svg";
import styles from "./CartWidget.module.css";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <div>
      <img className={styles.carrito} src={carrito} alt="Carrito de compras" />
      <strong> {totalItems} </strong>
    </div>
  );
};
