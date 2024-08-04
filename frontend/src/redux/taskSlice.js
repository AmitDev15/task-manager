import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import api from '../api';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await api.get('/tasks');
  return response.data;
});

export const addTask = createAsyncThunk('tasks/addTask', async (task) => {
  const response = await api.post('/tasks', task);
  return response.data;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id) => {
  await api.delete(`/tasks/${id}`);
  return id;
});

export const updateTask = createAsyncThunk('tasks/updateTask', async ({ id, title, description }) => {
  const response = await api.put(`/tasks/${id}`, { title, description });
  return response.data;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        return state.filter(task => task._id !== action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        return state.map(task => task._id === action.payload._id ? action.payload : task);
      });
  }
});

export default taskSlice.reducer;
