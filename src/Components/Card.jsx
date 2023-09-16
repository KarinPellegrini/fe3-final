import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "./utils/Context";

const Card = ({ char }) => {

  const { dispatch } = useCharStates()


  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: 'ADD_FAV', payload: char })
  }

  return (
    <div>
      <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/detail/' + char.id}>
          <img src='public/images/doctor.jpg' alt="Foto doctor" />
          <h3>{char.name}</h3>
          <h4>{char.username}</h4>
          <h5>{char.id}</h5>
        </Link>

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        {/* <button onClick={addFav} className="favButton">⭐</button> */}
        <button onClick={addFav} className="favButton">⭐</button>
      </div>
    </div>

  );
};

export default Card;
