
import React, { useState, useEffect } from "react";
// import styles from "./userPage.css";
import { Button } from "react-bootstrap";

import { Formik, Field, ErrorMessage } from "formik";
// import { useParams } from 'react-router-dom';
import * as Yup from "yup";
import axiosInstance from "../../axios/axios";

export default function AddProduct() {
  const [user, setUser] = useState({
    name: "",
    description: "",
    quantity: "",
    price: "",
    priceAfterDiscount: "",
    sold: "",
    category: "",
    subcategory: "",
    brand: "",
    seller: "",
  });


  const handleSubmit = async (values) => {
    try {
      await axiosInstance.post(`/products`, values);
      console.log(values); // log the updated form values
      const User = { ...user, ...values };
      setUser(User);
      console.log(User); // log the updated user object
      // Handle successful update
    } catch (error) {
      // Handle error
    }
  };

  return (
    <>
      <div>
        <div className="container">
          <div>
            <h1 className="text-center pt-5"> Create User</h1>
          </div>

          <div className="container">
            <hr />

            <div className="row">
              <div className="col-sm-12 ">
                {user && (
                  <Formik
                    initialValues={user}
                    onSubmit={handleSubmit}
                    // validationSchema={validationSchema}
                    enableReinitialize={true}
                  >
                    {(myformik) => (
                      <form onSubmit={myformik.handleSubmit}>
                        <label className="py-2" htmlFor="name">
                          productName
                        </label>
                        <input
                          onChange={myformik.handleChange}
                          value={myformik.values.name}
                          id="name"
                          type="name"
                          className="form-control my-1"
                          placeholder="write username"
                        />

                        <label className="py-2" htmlFor="description">
                          description
                        </label>
                        <input
                          onChange={myformik.handleChange}
                          value={myformik.values.description}
                          id="description"
                          type="description"
                          className="form-control my-1"
                          placeholder="write description"
                        />
                        <label className="py-2" htmlFor="quantity">
                          quantity
                        </label>
                        <input
                          onChange={myformik.handleChange}
                          value={myformik.values.quantity}
                          id="quantity"
                          type="quantity"
                          className="form-control my-1"
                          placeholder="write quantity"
                        />

                        <label className="py-2" htmlFor="price">
                          price
                        </label>
                        <input
                          onChange={myformik.handleChange}
                          value={myformik.values.price}
                          id="price"
                          type="price"
                          className="form-control my-1"
                          placeholder="write price"
                        />
                        <label className="py-2" htmlFor="priceAfterDiscount">
                          priceAfterDiscount
                        </label>
                        <input
                          onChange={myformik.handleChange}
                          value={myformik.values.priceAfterDiscount}
                          id="priceAfterDiscount"
                          type="priceAfterDiscount"
                          className="form-control my-1"
                          placeholder="write priceAfterDiscount"
                        />

                        <label className="py-2" htmlFor="sold">
                          sold
                        </label>
                        <input
                          onChange={myformik.handleChange}
                          value={myformik.values.sold}
                          id="sold"
                          type="sold"
                          className="form-control my-1"
                          placeholder="write how much sold "
                        />
                        <label className="py-2" htmlFor="category">
                          category
                        </label>
                        <input
                          onChange={myformik.handleChange}
                          value={myformik.values.category}
                          id="category"
                          type="category"
                          className="form-control my-1"
                          placeholder="write category"
                        />

                        <label className="py-2" htmlFor="subcategory">
                          subcategory
                        </label>
                        <input
                          onChange={myformik.handleChange}
                          value={myformik.values.subcategory}
                          id="subcategory"
                          type="subcategory"
                          className="form-control my-1"
                          placeholder="write  subcategory"
                        />
                        <label className="py-2" htmlFor="brand">
                          brand
                        </label>
                        <input
                          onChange={myformik.handleChange}
                          value={myformik.values.brand}
                          id="brand"
                          type="brand"
                          className="form-control my-1"
                          placeholder="write brand name"
                        />

                        <label className="py-2" htmlFor="seller">
                          seller
                        </label>
                        <input
                          onChange={myformik.handleChange}
                          value={myformik.values.seller}
                          id="seller"
                          type="seller"
                          className="form-control my-1"
                          placeholder="write seller"
                        />

                        <button type="submit" className=" btn btn-success my-2">
                          submit
                        </button>
                      </form>
                    )}
                  </Formik>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

  //   const validationSchema = Yup.object().shape({
  //     name: Yup.string()
  //       .min(8, 'Name must be at least 8 characters')
  //       .required('Name is required'),
  //     email: Yup.string()
  //       .email('Invalid email address')
  //       .required('Email is required'),
  //     password: Yup.string()
  //       .matches(
  //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
  //         'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'
  //       )
  //       .required('Password is required'),
  //       passwordConfirm: Yup.string()
  //       .oneOf([Yup.ref('password'), null], 'Passwords must match')
  //       .required('Confirm Password is required'),
  //   });
