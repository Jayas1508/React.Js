import React from "react";
import { useNavigate } from "react-router-dom";


const ViewPage = () => {
  const patients = JSON.parse(localStorage.getItem("patients")) || [];
  const navigate = useNavigate();

  return (
    <div className="app">
      <h1>View Patients</h1>
      <button className="back-button" onClick={() => navigate("/")}>
        Back to Admission Page
      </button>

      <div className="patient-list">
        {patients.length > 0 ? (
          patients.map((patient) => (
            <div key={patient.id} className="patient-card">
              <p><strong>Name:</strong> {patient.name}</p>
              <p><strong>Age:</strong> {patient.age}</p>
              <p><strong>Gender:</strong> {patient.gender}</p>
              <p><strong>Phone:</strong> {patient.phone}</p>
              <p><strong>Address:</strong> {patient.address}</p>
              <p><strong>Disease:</strong> {patient.disease}</p>
              <p><strong>Admit Date:</strong> {patient.admitDate}</p>
              <p><strong>Doctor:</strong> {patient.doctor}</p>
              <p><strong>Status:</strong> {patient.status}</p>
            </div>
          ))
        ) : (
          <p>No patients found.</p>
        )}
      </div>
    </div>
  );
};

export default ViewPage;