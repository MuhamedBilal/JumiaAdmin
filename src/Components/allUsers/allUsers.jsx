import React, { useState, useEffect } from 'react';
import { Table, Button, Pagination } from 'react-bootstrap';
import axiosInstance from '../axios/axios';

function AllUsers() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalUsers, setTotalUsers] = useState(0);
  const [usersPerPage] = useState(15);

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get(
        `/users?page=${currentPage}&limit=${usersPerPage}`
      );
      console.log(response.data);
      if (Array.isArray(response.data.data)) {
        setUsers(response.data.data);
        setTotalUsers(response.data.totalUsers);
      } else {
        console.log('Error: response data is not an array');
      }
    } catch (error) {
      // Handle error
    }
  };

  const handleDelete = async (id) => {
    try {
      await axiosInstance.delete(`/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      // Handle error
    }
  };

  const handleAddUser = async () => {
    try {
      const newUser = { name: 'NewUser', email: 'newuser@example.com' };
      const response = await axiosInstance.post('/users', newUser);
      setUsers([...users, response.data]);
    } catch (error) {
      // Handle error
    }
  };

  // Get current users
  const currentUsers = users;

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container">
      <h1 className="text-center my-4">All Users</h1>
      <Button variant="primary" onClick={handleAddUser}>
        Add User
      </Button>
      <Table striped bordered hover className="w-100">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map((user, index) => (
            <tr key={user._id}>
              <td>{(currentPage - 1) * usersPerPage + index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="warning">Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleDelete(user._id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
        {[...Array(Math.ceil(totalUsers / usersPerPage)).keys()].map(
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

export default AllUsers;
