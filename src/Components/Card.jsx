import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCharStates } from "./utils/Context";

const Card = ({ char }) => {
  const { dispatch, state } = useCharStates();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const addFav = () => {
    dispatch({ type: 'ADD_FAV', payload: char });
    setShowConfirmation(true);


    setTimeout(() => {
      setShowConfirmation(false);
    }, 3000);
  }

  const linkStyles = {
    color: state.theme ? 'white' : 'black'
  };

  return (
    <div>
      <div className="card">
        <Link to={'/detail/' + char.id} style={linkStyles}>
          <img src='public/images/doctor.jpg' alt="Foto doctor" />
          <h3>{char.name}</h3>
          <h4>{char.username}</h4>
          <h5>{char.id}</h5>
        </Link>

        <button onClick={addFav} className="favButton">⭐</button>
      </div>

      {showConfirmation && (
        <div className="confirmationPopup">
          Se agregó el doctor a tus favoritos
        </div>
      )}
    </div>
  );
};

export default Card;