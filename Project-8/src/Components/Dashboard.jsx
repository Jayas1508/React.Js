import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPatientsFromLocalStorage,  } from '../Services/LocalStorage';
const Dashboard = () => {
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortField, setSortField] = useState('name'); // Default sorting by name
  const [sortOrder, setSortOrder] = useState('asc'); // Default order is ascending

  useEffect(() => {
    const data = getPatientsFromLocalStorage();
    setPatients(data);
  }, []);

  // Handle sorting
  const handleSortChange = (e) => {
    setSortField(e.target.value);
    sortData(e.target.value, sortOrder); // Sort data immediately when the field is changed
  };

  const toggleSortOrder = () => {
    const newOrder = sortOrder === 'asc' ? 'desc' : 'asc';
    setSortOrder(newOrder);
    sortData(sortField, newOrder); // Re-sort when the order is toggled
  };

  const sortData = (field, order) => {
    const sortedPatients = [...patients].sort((a, b) => {
      if (order === 'asc') {
        return a[field] < b[field] ? -1 : 1;
      } else {
        return a[field] > b[field] ? -1 : 1;
      }
    });
    setPatients(sortedPatients);
  };

  // Handle search
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredPatients = patients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery) ||
    patient.diagnosis.toLowerCase().includes(searchQuery) ||
    patient.contact.toLowerCase().includes(searchQuery)
  );

  const handleDelete = (id) => {
    deletePatient(id);
    setPatients(getPatientsFromLocalStorage()); // Update the state after deletion
  };

  return (
    <div className="container">
      <div className="dashboard-header">
        <h1>Patient Dashboard</h1>
        <Link to="/add" className="btn-add">Add Patient</Link>
      </div>

      {/* Sorting and Search Controls */}
      <div className="sorting-search-container">
        <input
          type="text"
          placeholder="Search by Name, Diagnosis, or Contact"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <select onChange={handleSortChange} value={sortField}>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="gender">Gender</option>
          <option value="diagnosis">Diagnosis</option>
        </select>
        <button onClick={toggleSortOrder}>
          Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
        </button>
      </div>

      {/* Patient Table */}
      <table className="patient-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Diagnosis</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredPatients.map(patient => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.diagnosis}</td>
              <td>{patient.contact}</td>
              <td className="action-buttons">
                <Link to={`/view/${patient.id}`} className="btn-view">View</Link>
                <Link to={`/edit/${patient.id}`} className="btn-edit">Edit</Link>
                <button onClick={() => handleDelete(patient.id)} className="btn-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination (Optional) */}
      <div className="pagination">
        <button>Previous</button>
        <button>1</button>
        <button>2</button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Dashboard;
