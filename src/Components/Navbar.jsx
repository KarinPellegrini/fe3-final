import React from 'react'
import { Link } from 'react-router-dom';
import { useCharStates } from '../Components/utils/Context'
import './Navbar.css'

const Navbar = () => {

  const { state, dispatch } = useCharStates();

  const toggleTheme = () => {
    dispatch({ type: 'SWITCH_THEME' });
  };
  return (
    <nav>
      <Link to='/'><h1>DH Odonto</h1></Link>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favs</Link>
        <Link to='/contact'>Contact</Link>

        <button onClick={toggleTheme} >
          {state.theme ? '🌙' : '🌞'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar