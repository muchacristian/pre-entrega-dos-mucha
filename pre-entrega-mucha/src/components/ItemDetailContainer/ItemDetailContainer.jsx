import { useEffect, useState } from "react";
import { ItemDetail } from "../../ItemDetail/ItemDetail";
import { getProduct } from "../../asyncMocks";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProduct(id).then((resp) => {
      setItem(resp);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {isLoading ? (
        <h2 className="text-center">Cargando Producto...</h2>
      ) : (
        item && <ItemDetail {...item} />
      )}
    </>
  );
};
