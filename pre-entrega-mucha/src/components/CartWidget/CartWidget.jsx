import carrito from "./assets/cart-fill.svg";
import styles from "./CartWidget.module.css";

export const CartWidget = () => {
  return (
    <div>
      <img className={styles.carrito} src={carrito} alt="Carrito de compras" />
    </div>
  );
};
