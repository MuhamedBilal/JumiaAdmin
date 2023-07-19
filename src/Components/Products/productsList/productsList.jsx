import React, { useState, useEffect }  from 'react'
// import styles from './ProductsList.css'
import { Table, Button, Pagination } from "react-bootstrap";
import axiosInstance from "../../axios/axios";
import { useNavigate } from "react-router-dom";

function ProductsList() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [usersPerPage] = useState(15);
  const navigate = useNavigate();
  

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);
  // }, []);

  const fetchUsers = async () => {
    try {
      
      const response = await axiosInstance.get(
        
        `/products?page=${currentPage}&limit=${usersPerPage}`
        // `/users?page=${currentPage}&limit=${usersPerPage}`
      
        );
        setTotalUsers(response.data.Products.length);
      console.log(response.data);
      if (Array.isArray(response.data.Products)) {
        setUsers(response.data.Products);
        // setTotalUsers(response.data.Products.length);
      }
      //  else {
      //   console.log("Error: response data is not an array");
      // }
    } catch (error) {
      // Handle error
    }
  };

  const handleEdit = (id) => {
    // console.log(user)
    navigate(`/editProduct/${id}`);
    // <Link to={`/UserPage/${id}`}>Edit User</Link>
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/products/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      // Handle error
    }
  };

  const handleAddUser = async () => {
    navigate(`/addProduct`);
  };

  const currentUsers = users;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="text-center my-4">All Products</h1>
      <Button variant="primary" onClick={handleAddUser}>
      Products list
      </Button>
      <Table striped bordered hover className="w-100">
  <thead>
    <tr>
      <th>#</th>
      <th>Image</th>
      <th>Name</th>
      <th>Price</th>
      <th>Average Rating</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
     {console.log(currentUsers)}
    {
     currentUsers.map((product, index) => (
        <tr key={product.id}>
        <td>{(currentPage - 1) * usersPerPage + index + 1}</td>
        <td><img src={product.imageCover} alt={product.name} width="50" height="50" /></td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>{product.averageRating}</td>
        <td>
          <Button variant="warning" onClick={() => handleEdit(product._id)}>
            Edit
          </Button>{" "}
          <Button variant="danger" onClick={() => handleDelete(product._id)}>
            Delete
          </Button>
        </td>
      </tr>
    ))}
  </tbody>
</Table>

<Pagination>
  {totalUsers > 0 &&
    [...Array(Math.ceil(totalUsers / usersPerPage)).keys()].map(
      (number) => (
        <Pagination.Item
          key={number + 1}
          active={number + 1 === currentPage}
          onClick={() => paginate(number + 1)}
        >
          {number + 1}
        </Pagination.Item>
      )
    )}
</Pagination>
      
    </div>
  );
}

export default ProductsList
