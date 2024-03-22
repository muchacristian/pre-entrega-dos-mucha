import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getProductDB = (id) => {
    //Referencia a nuestro producto, primer parametro la base de datos, segundo la coleccion y tercero el id
    const productRef = doc(db, "products", id);

    // Traemos el producto de la base de datos ordenado
    getDoc(productRef).then((response) => {
      const product = {
        id: response.id,
        ...response.data(),
      };
      //Le decimos que ese item va a ser el producto
      setItem(product);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getProductDB(id);
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
