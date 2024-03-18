import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const { cart, clearCart, removeItem, totalprice } = useContext(CartContext);

  return (
    <>
      <div className="container my-4">
        {cart.map((item) => (
          <div key={item.id} className="d-flex flex-column p-3 card w-25 m-5">
            <img src={item.img} alt="" />
            <p key={item.id}>Nombre: {item.name} </p>
            <p>Cantidad: {item.quantity} </p>
            <p>Precio Unitario: ${item.price} </p>
            <p>Subtotal: ${item.subTotal}</p>
            <div>
              <button
                className="btn btn-danger"
                onClick={() => removeItem(item.id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        <h4>Total ${totalprice}</h4>
        <button className="btn btn-outline-success" onClick={clearCart}>
          Vaciar Carrito
        </button>
      </div>
    </>
  );
};
