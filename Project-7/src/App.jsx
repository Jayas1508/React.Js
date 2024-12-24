import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';  
import Dashboard from './components/Dashboard';
import PatientForm from './components/PatientForm';

function App() {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add-patient" element={<PatientForm />} />
        <Route path="/edit-patient/:id" element={<PatientForm />} />
      </Routes>
    </Router>
  );
}

export default App;
