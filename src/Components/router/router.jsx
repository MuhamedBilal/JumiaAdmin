import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import styles from 'Router.css'
import AllUsers from '../allUsers/allUsers'
import UserPage from '../userPage/userPage'
import Navigator from '../Navigator/Navigator';
import Signin from '../signin/signin'
import CreateUser from '../createUser/createUser'

function RouterApp() {
  return (
    <Router>
               <Routes>
            <Route path="/allUsers" element={<AllUsers/>} />
            <Route path="/userPage/:id" element={<UserPage/>} />
            <Route path="/signin" element={<Signin/>} />
            <Route path="/" element={<Navigator/>} />
            <Route path="/createUser" element={<CreateUser/>} />
              </Routes>
         </Router>
  )
}

export default RouterApp