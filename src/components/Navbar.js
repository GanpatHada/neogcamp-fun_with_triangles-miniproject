import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        {/* <h3>Fun with triangles</h3> */}
        <ul>
            <li ><NavLink className="navlinks" to="/">Quiz</NavLink></li>
            <li ><NavLink className="navlinks" to="/area">Area</NavLink></li>
            <li ><NavLink className="navlinks" to="/hypotenuse">Hypotenuse</NavLink></li>
            <li ><NavLink className="navlinks" to="/isTriangle">Angles?</NavLink></li>
        </ul>
    </nav>
  )
}

export default Navbar