import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PatientForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [patient, setPatient] = useState({
    id: '',
    name: '',
    age: '',
    gender: '',
    diagnosis: '',
    contactNumber: '',
    address: '',
    bloodGroup: '',
    admissionDate: '',
  });

  useEffect(() => {
    if (id) {
      const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
      const currentPatient = storedPatients.find((p) => p.id === id);
      setPatient(currentPatient);
    }
  }, [id]);

  const handleChange = (e) => {
    setPatient({
      ...patient,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const storedPatients = JSON.parse(localStorage.getItem('patients')) || [];
    if (id) {
      const updatedPatients = storedPatients.map((p) =>
        p.id === id ? { ...patient } : p
      );
      localStorage.setItem('patients', JSON.stringify(updatedPatients));
    } else {
      patient.id = new Date().toISOString();
      storedPatients.push(patient);
      localStorage.setItem('patients', JSON.stringify(storedPatients));
    }
    navigate('/');
  };

  const handleReset = () => {
    setPatient({
      id: '',
      name: '',
      age: '',
      gender: '',
      diagnosis: '',
      contactNumber: '',
      address: '',
      bloodGroup: '',
      admissionDate: '',
    });
  };

  return (
    <div className="container mt-4">
      <h2>{id ? 'Edit Patient' : 'Add Patient'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={patient.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">Age</label>
          <input
            type="number"
            className="form-control"
            id="age"
            name="age"
            value={patient.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">Gender</label>
          <select
            className="form-control"
            id="gender"
            name="gender"
            value={patient.gender}
            onChange={handleChange}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="diagnosis" className="form-label">Diagnosis</label>
          <input
            type="text"
            className="form-control"
            id="diagnosis"
            name="diagnosis"
            value={patient.diagnosis}
            onChange={handleChange}
          />
        </div>
        {/* Add more fields as required */}
        <button type="submit" className="btn btn-primary">{id ? 'Update Patient' : 'Add Patient'}</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={handleReset}>Reset</button>
      </form>
    </div>
  );
};

export default PatientForm;
