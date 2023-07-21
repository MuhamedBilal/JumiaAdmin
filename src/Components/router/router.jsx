import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import styles from 'Router.css'
import AllUsers from "../Users/allUsers/allUsers";
import UserPage from "../Users/userPage/userPage";
import Navigator from "../Navigator/Navigator";
import Signin from "../signin/signin";
import CreateUser from "../Users/createUser/createUser";
import AddProduct from "../Products/AddProduct/AddProduct"
import ProductsList from "../Products/productsList/productsList"
import EditProduct from "../Products/editProduct/editProduct"
import OrdersList from "../Orders/ordersList/ordersList"
import PrivateRoute from "./guard";

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Signin />} />
        <Route path="/signIn" element={<Signin />} />
        <Route path="/allUsers" element={<PrivateRoute> <AllUsers /> </PrivateRoute>} />
        <Route path="/userPage/:id" element={<PrivateRoute><UserPage /> </PrivateRoute>} />
        <Route path="/createUser" element={<PrivateRoute><CreateUser /></PrivateRoute>} />
        <Route path="/addProduct" element={<PrivateRoute><AddProduct /></PrivateRoute>} />
        <Route path="/productsList" element={<PrivateRoute><ProductsList/></PrivateRoute>} />
        <Route path="/editProduct/:id" element={<PrivateRoute><EditProduct/></PrivateRoute>} />
        <Route path="/ordersList" element={<PrivateRoute><OrdersList/></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default RouterApp;
