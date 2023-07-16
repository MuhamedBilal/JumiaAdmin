import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import styles from 'Router.css'
import AllUsers from '../allUsers/allUsers'
import UserPage from '../userPage/userPage'
import Navigator from '../Navigator/Navigator';
function RouterApp() {
  return (
    <Router>
               <Routes>
            <Route path="/allUsers" element={<AllUsers/>} />
            <Route path="/userPage" element={<UserPage/>} />
            <Route path="/" element={<Navigator/>} />
              </Routes>
         </Router>
  )
}

export default RouterApp