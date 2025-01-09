import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteNote, editNote } from '../Services/NoteActions';

const NotesList = () => {
  const { notes, searchQuery } = useSelector((state) => state);
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const dispatch = useDispatch();

  // States for editing
  const [isEditing, setIsEditing] = useState(null); // Tracks which note is being edited
  const [editedTitle, setEditedTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');

  // Start editing a note
  const startEditing = (note) => {
    setIsEditing(note.id);
    setEditedTitle(note.title);
    setEditedContent(note.content);
  };

  // Save the edited note
  const saveEdit = (id) => {
    if (editedTitle.trim() && editedContent.trim()) {
      dispatch(editNote({ id, title: editedTitle, content: editedContent }));
      setIsEditing(null);
    } else {
      alert('Both title and content are required!');
    }
  };

  return (
    <div className="notes-list">
      {filteredNotes.length > 0 ? (
        filteredNotes.map((note) => (
          <div className="note-item" key={note.id}>
            {isEditing === note.id ? (
              <div>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  placeholder="Edit title"
                />
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  placeholder="Edit content"
                ></textarea>
                <button onClick={() => saveEdit(note.id)}>Save</button>
                <button onClick={() => setIsEditing(null)}>Cancel</button>
              </div>
            ) : (
              <div>
                <h3>{note.title}</h3>
                <p>{note.content}</p>
                <span>{note.date}</span>
                <button onClick={() => dispatch(deleteNote(note.id))}>Delete</button>
                <button onClick={() => startEditing(note)}>Edit</button>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No notes found</p>
      )}
    </div>
  );
};

export default NotesList;
