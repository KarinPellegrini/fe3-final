import React from "react";
import Card from "../Components/Card";
import { useCharStates } from "../Components/utils/Context";


// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useCharStates();
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {state.favs.map((fav) => (
          <Card key={fav.id} char={fav} />
        ))}
        {/* Este componente debe consumir los destacados del localStorage */}
        {/* Deberán renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
