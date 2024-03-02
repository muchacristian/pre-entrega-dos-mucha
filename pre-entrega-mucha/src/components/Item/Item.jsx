import { Link } from "react-router-dom";

export const Item = ({ id, name, brand, img }) => {
  return (
    <div className="card w-25 m-5">
      <img src={img} alt="" />
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{brand}</p>
        <Link to={`/item/${id}`}>
          <button className="btn btn-primary">Detalles</button>
        </Link>
      </div>
    </div>
  );
};
