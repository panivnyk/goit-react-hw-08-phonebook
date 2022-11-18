import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://62fbc9c4abd610251c112984.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  // We use the underscore character as the name of the first parameter,
  // because we don't need it in this operation
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      // If the request is successful, we return a promise with data
      return response.data;
    } catch (error) {
      // If the request fails, return the promise
      // which will be rejected with an error text
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
