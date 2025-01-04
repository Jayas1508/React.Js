export const getPatientsFromLocalStorage = () => {
  const data = localStorage.getItem('patients');
  return data ? JSON.parse(data) : [];
};

export const savePatientsToLocalStorage = (patients) => {
  localStorage.setItem('patients', JSON.stringify(patients));
};

export const deletePatientFromLocalStorage = (id) => {
  const patients = getPatientsFromLocalStorage();
  const updatedPatients = patients.filter(patient => patient.id !== id);
  savePatientsToLocalStorage(updatedPatients);
};
