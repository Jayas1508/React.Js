import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import PatientForm from './Components/PatientForm';
import PatientDetail from './Components/PatientDetail';

function App() {
  return (
    
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add" element={<PatientForm />} />
          <Route path="/edit/:id" element={<PatientForm />} />
          <Route path="/view/:id" element={<PatientDetail />} />
        </Routes>
      </div>
    
  );
}

export default App;
