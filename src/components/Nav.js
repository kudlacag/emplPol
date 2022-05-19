import React from 'react';
import { Link } from 'react-router-dom'
import userAvatar from '../images/useravatar.png';



function Nav() {
  return (

    <nav>
      <div className="nav-wrapper green darken-2" >
        <Link to="/" className="brand-logo hide-on-med-and-down">Employee Poll</Link>
        <ul className="left">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/leaderdashboard">Leaderdashboard</Link></li>
          <li><Link to="/add">New</Link></li>
          <li><Link to="/questions">Questions</Link></li>
        </ul>
        <ul  className="right">
      <li><Link to="/">
        <img src={userAvatar} alt="useravatar" style={{ width: '50px', height:'auto', borderRadius: '50%'}} />
        </Link></li>
      <li><Link to="/">Ramadan</Link></li>
      <li className="divider"></li>
      <li><Link to="/">Logout</Link></li>
    </ul>
      </div>
      
    </nav>
   
  )
}

export default Nav