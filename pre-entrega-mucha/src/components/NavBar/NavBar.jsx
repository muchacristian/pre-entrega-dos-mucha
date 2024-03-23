import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./NavBar.module.css";
import logo from "./assets/logo.jpg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className={styles.navegacion} >
        <Link to="/">
          <img className={styles.logo} src={logo} alt="Logo de la tienda" />
        </Link>
        <div>
          <Link to="/">
            <button className="btn btn-light mx-5">Inicio</button>
          </Link>
          <Link to="/category/guitarras">
            <button className="btn btn-light mx-5">Guitarras</button>
          </Link>
          <Link to="/category/bajos">
            <button className="btn btn-light mx-5">Bajos</button>
          </Link>
          <Link to="/category/pianos">
            <button className="btn btn-light mx-5">Pianos</button>
          </Link>
          <Link to="/category/baterias">
            <button className="btn btn-light mx-5">Baterias</button>
          </Link>
        </div>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </nav>
    </>
  );
};
