import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66d431285b34bcb9ab3de8e7.mockapi.io/";

export const fetchTasks = createAsyncThunk(
  "contacts/fetchAll",
  
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/contacts");
      
      return response.data;
    } catch (e) {
      
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
    'contacts/addContacts',
    async (text, thunkAPI) => {
      try {
        const response = await axios.post('/contacts', { text });
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  
  export const deleteContact = createAsyncThunk(
    'contacts/deleteContact',
    async (taskId, thunkAPI) => {
      try {
        const response = await axios.delete(`/tasks/${taskId}`);
        return response.data;
      } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
    }
  );
  