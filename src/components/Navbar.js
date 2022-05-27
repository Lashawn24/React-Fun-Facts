import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="">
        <div className="container">
            <a href="/" className="brand-logo">Facts about Dogs</a>
            <ul className="right">
                <button><NavLink to="/">Home</NavLink></button>
                <button><Link to="/Cane Corso">Cane Corso</Link></button>
                <button><Link to="/German Shep">German Shep</Link></button>
                <button><Link to="/Golden Doodle">Golden Doodle</Link></button>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar