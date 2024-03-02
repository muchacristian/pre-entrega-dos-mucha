import { useEffect, useState } from "react";
import styles from "./ItemListContainer.module.css";
import { getProducts } from "../../asyncMocks";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = ({ greeting }) => {
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true)
    getProducts().then((resp) => {
      console.log(resp)
      if (category) {
        const productFilter = resp.filter(
          (product) => product.category == category
        );
        console.log(productFilter)
        setProducts(productFilter);
      } else {
        setProducts(resp);
      }
      setIsLoading(false);
    });
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
