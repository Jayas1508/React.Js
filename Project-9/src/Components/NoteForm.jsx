import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNote } from '../Services/NoteActions';

const NoteForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleAddNote = () => {
    if (title.trim() && content.trim()) {
      const newNote = {
        id: Date.now(), 
        title,
        content,
        date: new Date().toLocaleString(),
      };
      dispatch(addNote(newNote));
      setTitle('');
      setContent('');
    } else {
      alert('Please fill out both the title and content!');
    }
  };

  return (
    <div className="note-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Take a note..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      ></textarea>
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default NoteForm;
