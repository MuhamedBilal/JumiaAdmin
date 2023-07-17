import React from 'react'
// import styles from 'Navigator.css'
import { Link } from 'react-router-dom';

function Navigator() {
  return (
    <nav>
    <ul>
          <li>
        <Link to="/AllUsers">AllUsers</Link>
      </li>
      <li>
        <Link to="/UserPage">UserPage</Link>
      </li>
      <li>
        <Link to="/Signin">Signin</Link>
      </li>
    </ul>
  </nav>
  )
}

export default Navigator