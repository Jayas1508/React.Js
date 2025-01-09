import { createSlice } from '@reduxjs/toolkit';

const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    notes: JSON.parse(localStorage.getItem('notes')) || [],
    searchQuery: '',
  },
  reducers: {
    addNote: (state, action) => {
      state.notes.push(action.payload);
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem('notes', JSON.stringify(state.notes));
    },
    editNote: (state, action) => {
      const { id, title, content } = action.payload;
      const noteIndex = state.notes.findIndex((note) => note.id === id);
      if (noteIndex >= 0) {
        state.notes[noteIndex].title = title;
        state.notes[noteIndex].content = content;
        localStorage.setItem('notes', JSON.stringify(state.notes));
      }
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

export const { addNote, deleteNote, editNote, setSearchQuery } = notesSlice.actions;
export default notesSlice.reducer;
