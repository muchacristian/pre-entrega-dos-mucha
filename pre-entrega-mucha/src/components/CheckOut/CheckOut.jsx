import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const CheckOut = () => {
  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const [formCheckout, setFormCheckout] = useState({
    name: "",
    phone: 0,
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleName = (e) => {
    setFormCheckout({
      ...formCheckout,
      name: e.target.value,
    });
  };

  const handlePhone = (e) => {
    setFormCheckout({
      ...formCheckout,
      phone: e.target.value,
    });
  };

  const handleEmail = (e) => {
    setFormCheckout({
      ...formCheckout,
      email: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOrder = {
      buyer: formCheckout,
      items: cart,
      totalPrice,
      date: serverTimestamp(), // Metodo de firebase que guarda la fecha
    };

    //Se agrega la orden de comprar a la base de datos
    const order = await addDoc(collection(db, "orders"), newOrder);

    //Vacia el formulario
    setFormCheckout({
      name: "",
      phone: 0,
      email: "",
    });

    //Vacia el carrito
    clearCart();

    // Setear el orderId
    setOrderId(order.id);
  };

  if (orderId) {
    return (
      <>
        <div className="d-flex align-items-center justify-content-center border border-2">
          <h3>
            Su Numero de orden de compra es <strong>{orderId}</strong>
          </h3>
        </div>
        <h4 className="text-center w-100 mt-4">¡Gracias por elegirnos!</h4>
        <p className="text-center mt-4">
          En un plazo de 24hs nuestro equipo de ventas se pondra en contacto con
          usted.
        </p>
      </>
    );
  }

  return (
    <div className="container d-flex justify-content-center m-5">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Nombre</label>
        <input
          type="text"
          className="form-control"
          value={formCheckout.name}
          onChange={handleName}
        />
        <label htmlFor="">Telefono</label>
        <input
          type="number"
          className="form-control"
          value={formCheckout.phone}
          onChange={handlePhone}
        />
        <label htmlFor="">Email </label>
        <input
          type="email"
          className="form-control"
          value={formCheckout.email}
          onChange={handleEmail}
        />
        <input
          type="submit"
          className="btn btn-success m-3"
          value="Finalizar compra"
        />
      </form>
    </div>
  );
};
