import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      return setCount(count + 1);
    }
    setCount(count);
  };

  const decrement = () => {
    if (count === 0) {
      return setCount(0);
    }
    setCount(count - 1);
  };

  return (
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center">
        <button className="btn btn-outline-secondary mx-3" onClick={increment}>
          +
        </button>
        <strong>{count}</strong>
        <button className="btn btn-outline-secondary mx-3" onClick={decrement}>
          -
        </button>
      </div>
      <button className="btn btn-outline-primary w-75 mx-5 mt-1" onClick={() => onAdd(count)}>
        Agregar al Carrito
      </button>
    </div>
  );
};
