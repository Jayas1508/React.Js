import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PatientRow from './PatientRow';

const Dashboard = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    setPatients(storedPatients);
  }, []);

  const deletePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
    localStorage.setItem('patients', JSON.stringify(updatedPatients));
  };

  return (

         <div className="container mt-4 ">
      <h2>Patient Management Dashboard</h2>
      <Link to="/add-patient" className="btn btn-primary mb-3">Add Patient</Link>
      <table className="table table-bordered">
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
            <PatientRow key={patient.id} patient={patient} deletePatient={deletePatient} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
