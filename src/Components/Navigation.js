import React from 'react';
import { NavLink } from 'react-router-dom';
import "../styles/Navigation.css"

function Navigation() {
  return (
    <nav>
        <ul>
            <li><NavLink to="/">Presentation</NavLink></li>
            <li><NavLink to="/routing">Routage</NavLink></li>
            <li><NavLink to="/static">Static</NavLink></li>
            <li><NavLink to="/hooks">State</NavLink></li>
            <li><NavLink to="/props">Product</NavLink></li>
            <li><NavLink to="/connexion">Connexion</NavLink></li>
            <li><NavLink to="/effect">Effects</NavLink></li>
            <li><NavLink to="/request">Request</NavLink></li>
            <li><NavLink to="/forms">Forms</NavLink></li>
            <li><NavLink to="/404">404</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navigation