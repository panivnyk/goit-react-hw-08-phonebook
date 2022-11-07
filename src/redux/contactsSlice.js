import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsList: contactsInitialState,
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      state.contactsList.push(action.payload);
    },
    delContact(state, action) {
      state.contactsList = state.contactsList.filter(
        contact => contact.id !== action.payload
      );
    },
    updFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

const persistConfig = {
  key: 'root',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, delContact, updFilter } = contactsSlice.actions;
