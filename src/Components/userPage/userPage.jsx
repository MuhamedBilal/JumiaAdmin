import React from "react";
import styles from "./userPage.css";
import { Formik, useFormik } from "formik";

export default function UserPage() {
  let user = {
    role: "",
    username: "",
    password: "",
    email: "",
  };

  let myformik = useFormik({
    initialValues: user,
    onSubmit: function (values) {
      console.log(values);
    },
  });
  return (
    <>
      <div>
        <div className="container">
          <div>
            <h1 className="text-center pt-5"> ismail salah</h1>
            <h5 className="text-center text-success">role</h5>
          </div>

          <div className="container">
            <h2>account</h2>
            <hr />

            <div className="row">
              {/* <div className="col-sm-3">
<h4 className='text-success py-3'>
role :
</h4>
<h4 className='text-success py-3'>
Username :
</h4>
<h4 className='text-success py-3'>
  Email :
</h4>
<h4 className='text-success py-3'>
  Password :
</h4>

</div> */}
              <div className="col-sm-12 ">
                <form onSubmit={myformik.handleSubmit}>
                  
                  <label className="py-2" htmlFor="username">
                    {" "}
                    username{" "}
                  </label>

                  <input
                    onChange={myformik.handleChange}
                    value={myformik.values.username}
                    id="username"
                    type="username"
                    className="form-control my-1"
                    placeholder="write username"
                  />

                  <label className="py-2" htmlFor="email">
                    email{" "}
                  </label>
                  <input
                    onChange={myformik.handleChange}
                    value={myformik.values.email}
                    id="email"
                    type="email"
                    className="form-control my-1"
                    placeholder="write your email"
                  />

                  <label className="py-2" htmlFor="password">
                    Password{" "}
                  </label>
                  <input
                    onChange={myformik.handleChange}
                    value={myformik.values.password}
                    id="password"
                    type="password"
                    className="form-control my-1"
                    placeholder="write your email"
                  /> 

<label className="py-2" htmlFor="admin">
                    {" "}
                    role{" "}
                  </label>
                  <input
                    onChange={myformik.handleChange}
                    value={myformik.values.role}
                    id="role"
                    type="role"
                    className="form-control my-1"
                    placeholder="write your role"
                  />

                  <button type="submit" className=" btn btn-success my-2">
                    submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
