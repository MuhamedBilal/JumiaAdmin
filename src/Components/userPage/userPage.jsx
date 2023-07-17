import React, { useState, useEffect } from "react";
import styles from "./userPage.css";
import { Formik } from "formik";
import { useParams } from 'react-router-dom';
import axiosInstance from '../axios/axios';

export default function UserPage() {
  const params = useParams();
  const id = params.id;

  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axiosInstance.get(`/users/${id}`);
        setUser(response.data.data);
        console.log(response.data.data)
      } catch (error) {
        // Handle error
      }
    };
    fetchUserData();
  }, [id]);

  const handleSubmit = async (values) => {
    try {
      await axiosInstance.put(`/users/${id}`, values);
      console.log(values); // log the updated form values
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
            <h1 className="text-center pt-5"> {user.name}</h1>
            {/* <h5 className="text-center text-success">role</h5> */}
          </div>

          <div className="container">
            <h2>account</h2>
            <hr />

            <div className="row">
              <div className="col-sm-12 ">
                <Formik initialValues={user} onSubmit={handleSubmit}>
                  {(myformik) => (
                    <form onSubmit={myformik.handleSubmit}>
                      <label className="py-2" htmlFor="name">username</label>
                      <input
                        onChange={myformik.handleChange}
                        value={myformik.values.name}
                        id="name"
                        type="name"
                        className="form-control my-1"
                        placeholder="write username"
                      />

                      <label className="py-2" htmlFor="email">email</label>
                      <input
                        onChange={myformik.handleChange}
                        value={myformik.values.email}
                        id="email"
                        type="email"
                        className="form-control my-1"
                        placeholder="write your email"
                      />

                      <button type="submit" className=" btn btn-success my-2">
                        submit
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}