import React from 'react';
import NoteForm from './Components/NoteForm';
import NotesList from './Components/NoteList';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <h1>Google Keep Clone</h1>
      <NoteForm />
      <NotesList />
    </div>
  );
};

export default App;
