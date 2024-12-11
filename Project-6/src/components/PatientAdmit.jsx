import React, { useState, useEffect } from "react";

const App = () => {
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    gender: "",
    address: "",
    phone: "",
    disease: "",
    admitDate: "",
    doctor: "",
    status: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Load patients from localStorage when the component mounts
    const savedPatients = JSON.parse(localStorage.getItem("patients")) || [];
    setPatients(savedPatients);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = { ...formData, id: isEditing ? formData.id : Date.now().toString() };

    const updatedPatients = isEditing
      ? patients.map((patient) => (patient.id === formData.id ? newPatient : patient))
      : [...patients, newPatient];

    setPatients(updatedPatients);
    localStorage.setItem("patients", JSON.stringify(updatedPatients));

    // Reset form and state
    setFormData({
      id: "",
      name: "",
      age: "",
      gender: "",
      address: "",
      phone: "",
      disease: "",
      admitDate: "",
      doctor: "",
      status: "",
    });
    setIsEditing(false);
  };

  const handleEdit = (id) => {
    const patientToEdit = patients.find((patient) => patient.id === id);
    setFormData(patientToEdit);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
    localStorage.setItem("patients", JSON.stringify(updatedPatients));
  };

  return (
    <div className="app">
      <h1>Patient Admission Form</h1>

      <form className="form" onSubmit={handleSubmit}>
        {["name", "age", "gender", "address", "phone", "disease", "admitDate", "doctor", "status"].map((field) => (
          <div key={field} className="form-group">
            <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              type="text"
              name={field}
              value={formData[field]}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <button type="submit">{isEditing ? "Update Patient" : "Add Patient"}</button>
      </form>

      <div className="patient-list">
        <h2>Patient List</h2>
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
              <button onClick={() => handleEdit(patient.id)}>Edit</button>
              <button onClick={() => handleDelete(patient.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No patients added yet.</p>
        )}
      </div>
    </div>
  );
};

export default App;
