
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://62584f320c918296a49543e7.mockapi.io";

export const fetchTasks = createAsyncThunk("tasks/getAll", async (_, thunkAPI) => {
    try {
        const res = await axios.get("/tasks");
    return res.data;
    } catch  {
        return thunkAPI.rejectWithValue();
    }
    
});
 
export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (newTask, thunkAPI) => {
    try {
      const res = await axios.post("/tasks", newTask);
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskId, thunkAPI) => {
    try {
      const res = await axios.delete(`/tasks/${taskId}`);
      return res.data;
    } catch {
      return thunkAPI.rejectWithValue();
    }
  }
);