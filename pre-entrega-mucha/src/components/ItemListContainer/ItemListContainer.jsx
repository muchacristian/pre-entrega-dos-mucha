import { useEffect, useState } from "react";
import styles from "./ItemListContainer.module.css";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";
import { seedProducts } from "../../utils/seedProducts";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getProductsDB = (category) => {
    // Coleccion de nuestra base de datos
    const myProducts = category
      ? query(collection(db, "products"), where("category", "==", category))
      : collection(db, "products");

    //Ordenamos los productos recibidos de nuestra base de datos en un nuevo array para guardar en el state
    getDocs(myProducts).then((response) => {
      const productList = response.docs.map((doc) => {
        const item = {
          id: doc.id,
          ...doc.data(),
        };

        return item;
      });
      //Guardamos los productos ya ordenados en el state
      setProducts(productList);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    setIsLoading(true);
    getProductsDB(category);
    //Al seedProducts lo ejecutamos una sola vez y lo comentamos para que no repita los productos
    // seedProducts();
  }, [category]);

  return (
    <>
      <h1 className={styles.title}>{greeting}</h1>
      {isLoading ? (
        <h2 className="text-center mt-5">Cargando Productos...</h2>
      ) : (
        <ItemList products={products} />
      )}
    </>
  );
};
