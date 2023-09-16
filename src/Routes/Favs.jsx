import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Components/utils/Context";


const Favs = () => {
  const { state } = useCharStates();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((fav) => (
          <Card key={fav.id} char={fav} />
        ))}
      </div>
    </>
  );
};

export default Favs;
