import { useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

export const ItemDetail = ({ id, name, description, img, price, stock }) => {
  const { addItem } = useContext(CartContext);

  const onAdd = (quantity) => {
    const item = {
      id,
      name,
      price,
      img,
    };

    addItem(item, quantity);
  };

  return (
    <div className="d-flex justify-content-center mb-5">
      <div className="card w-25">
        <div className="card body">
          <h4 className="card title text-center">
            <strong>{name}</strong>
          </h4>
          <img src={img} alt="" />
          <p className="card-text ms-4"> {description} </p>
          <p className="ms-4">Precio: ${price} </p>
          <ItemCount stock={stock} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};
