import React from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "./utils/Context";

const Card = ({ char }) => {

  const { dispatch, state } = useCharStates()


  const addFav = () => {
    dispatch({ type: 'ADD_FAV', payload: char })
  }

  const linkStyles = {
    color: state.theme ? 'white' : 'black'
  };


  return (
    <div>
      <div className="card" >
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/detail/' + char.id} style={linkStyles}>
          <img src='public/images/doctor.jpg' alt="Foto doctor" />
          <h3>{char.name}</h3>
          <h4>{char.username}</h4>
          <h5>{char.id}</h5>
        </Link>

        <button onClick={addFav} className="favButton">⭐</button>
      </div>
    </div>

  );
};

export default Card;
