import React from 'react'
import './Header.css'
import {Link, NavLink} from 'react-router-dom'
import { navLinks } from '../../data/navlinks'

function Header() {
  return (
    <header>
        <Link to='.'>
            <h2>#VANLIFE</h2>
        </Link>
        <nav>
            {
                navLinks.map( (current) => {
                    return (
                        <NavLink to={current.linkTo} key={current.id}>
                            {current.name}       
                        </NavLink>
                    )
                } )
            }
        </nav>
    </header>
  )
}

export default Header