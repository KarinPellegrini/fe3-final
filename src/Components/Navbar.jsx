import React from 'react'
import { Link } from 'react-router-dom';
import { useCharStates } from '../Components/utils/Context'
import './Navbar.css'
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { state, dispatch } = useCharStates();

  const toggleTheme = () => {
    dispatch({ type: 'SWITCH_THEME' });
  };
  return (
    <nav>
      <h1>DH Odonto</h1>
      <div>
        {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favs</Link>
        <Link to='/contact'>Contact</Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button onClick={toggleTheme} >
          {state.theme ? '🌙' : '🌞'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar