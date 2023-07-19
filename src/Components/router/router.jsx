import React from "react";
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

function RouterApp() {
  return (
    <Router>
      <Routes>
        <Route path="/allUsers" element={<AllUsers />} />
        <Route path="/userPage/:id" element={<UserPage />} />
        <Route path="/signIn" element={<Signin />} />
        <Route path="/" element={<Navigator />} />
        <Route path="/createUser" element={<CreateUser />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/productsList" element={<ProductsList/>} />
        <Route path="/editProduct/:id" element={<EditProduct/>} />
      </Routes>
    </Router>
  );
}

export default RouterApp;
