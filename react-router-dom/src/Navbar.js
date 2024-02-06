import React from 'react'
import {Link} from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
        <ul>
            <Link to="/"><li>Home</li></Link>
            <Link to="/Dashboard"><li>Dashboard</li></Link>
            <Link to="/about"><li>about</li></Link>
        </ul>
      
    </div>
  )
}

export default Navbar
