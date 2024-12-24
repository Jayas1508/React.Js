import React from 'react';
import { Link } from 'react-router-dom';

const PatientRow = ({ patient, deletePatient }) => {
  return (
    <tr>
      <td>{patient.name}</td>
      <td>{patient.age}</td>
      <td>{patient.gender}</td>
      <td>
        <Link to={`/edit-patient/${patient.id}`} className="btn btn-warning btn-sm mr-2">Edit</Link>  || 
        || <button onClick={() => deletePatient(patient.id)} className="btn btn-danger btn-sm">Delete</button>
      </td>
    </tr>
  );
};

export default PatientRow;
