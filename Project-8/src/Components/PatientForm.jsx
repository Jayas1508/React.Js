import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getPatientsFromLocalStorage, savePatientsToLocalStorage } from '../Services/LocalStorage';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    diagnosis: '',
    contact: '',
    address: '',
    bloodGroup: '',
    admissionDate: '',
  });

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const patients = getPatientsFromLocalStorage();
      const patientToEdit = patients.find(patient => patient.id === parseInt(id));
      if (patientToEdit) {
        setFormData(patientToEdit);
      }
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const patients = getPatientsFromLocalStorage();
    const newPatient = { ...formData, id: id ? parseInt(id) : Date.now() };

    if (id) {
      const updatedPatients = patients.map(patient =>
        patient.id === newPatient.id ? newPatient : patient
      );
      savePatientsToLocalStorage(updatedPatients);
    } else {
      savePatientsToLocalStorage([...patients, newPatient]);
    }

    navigate('/');
  };

  return (
    <div className="container mt-4">
      <h2>{id ? 'Edit Patient' : 'Add New Patient'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6 mt-4">
            <div className="form-group">
              <label htmlFor="name">Patient Name</label>
              <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <input type="text" className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleChange} required />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="diagnosis">Diagnosis</label>
              <input type="text" className="form-control" id="diagnosis" name="diagnosis" value={formData.diagnosis} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="contact">Contact Number</label>
              <input type="text" className="form-control" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="bloodGroup">Blood Group</label>
              <input type="text" className="form-control" id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="admissionDate">Admission Date</label>
              <input type="date" className="form-control" id="admissionDate" name="admissionDate" value={formData.admissionDate} onChange={handleChange} />
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">Submit</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <button type="button" className="btn btn-secondary" onClick={() => navigate('/')}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PatientForm;
