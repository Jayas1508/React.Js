import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPatientsFromLocalStorage } from '../Services/LocalStorage';

const PatientDetail = () => {
  const [patient, setPatient] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const patients = getPatientsFromLocalStorage();
    const patientToView = patients.find(patient => patient.id === parseInt(id));
    setPatient(patientToView);
  }, [id]);

  return (
    <div className="container mt-4">
      {patient ? (
        <div className="card">
          <div className="card-body">
            <h3 className="card-title">{patient.name}</h3>
            <p className="card-text"><strong>Age:</strong> {patient.age}</p>
            <p className="card-text"><strong>Gender:</strong> {patient.gender}</p>
            <p className="card-text"><strong>Diagnosis:</strong> {patient.diagnosis}</p>
            <p className="card-text"><strong>Contact:</strong> {patient.contact}</p>
            <p className="card-text"><strong>Address:</strong> {patient.address}</p>
            <p className="card-text"><strong>Blood Group:</strong> {patient.bloodGroup}</p>
            <p className="card-text"><strong>Admission Date:</strong> {patient.admissionDate}</p>
            <button className="btn btn-secondary mt-3" onClick={() => navigate('/')}>Back to Dashboard</button>
          </div>
        </div>
      ) : (
        <div className="alert alert-warning">
          Patient not found.
        </div>
      )}
    </div>
  );
};

export default PatientDetail;
