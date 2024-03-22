import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

export const Cart = () => {
  const { cart, clearCart, removeItem, totalPrice } = useContext(CartContext);

  // Funcion para eliminar item del carrito
  const handleDeleteItem = (item) => {
    Swal.fire({
      icon: "question",
      title: `¿Seguro que desea eliminar ${item.name} del carrito de compra?`,
      showCancelButton: true,
      showConfirmButton: true,
    }).then((resp) => {
      if (resp.isConfirmed) {
        removeItem(item.id);
        Swal.fire({
          icon: "success",
          title: "Producto eliminado.",
        });
      }
    });
  };

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
                onClick={() => handleDeleteItem(item)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="container">
        {totalPrice > 0 ? (
          <div>
            <h4>Total ${totalPrice}</h4>
            <button className="btn btn-outline-success" onClick={clearCart}>
              Vaciar Carrito
            </button>
            <Link to="/checkout">
              <button className="btn btn-success mx-2">Comprar</button>
            </Link>
          </div>
        ) : (
          <h4>El Carrito esta vacio</h4>
        )}
      </div>
    </>
  );
};
