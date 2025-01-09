import { configureStore } from '@reduxjs/toolkit';
import notesReducer from './NoteActions';

const store = configureStore({
  reducer: notesReducer,
});

export default store;
