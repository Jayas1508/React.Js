import React from 'react';
import { Link } from 'react-router-dom';

const PatientTable = ({ patients, setPatients }) => {
  const handleDelete = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
    localStorage.setItem('patients', JSON.stringify(updatedPatients));
  };

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td>{patient.name}</td>
            <td>{patient.age}</td>
            <td>{patient.gender}</td>
            <td>
              <Link to={`/view/${patient.id}`} className="btn btn-info btn-sm mr-2">View</Link>
              <Link to={`/edit/${patient.id}`} className="btn btn-warning btn-sm mr-2">Edit</Link>
              <button onClick={() => handleDelete(patient.id)} className="btn btn-danger btn-sm">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatientTable;
