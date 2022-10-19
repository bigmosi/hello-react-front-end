import { createAsyncThunk } from "@reduxjs/toolkit";
import fetchRandomMessage from "./messagesAPI";

const initialState = {
    status: 'idle',
    randomMessage: null
}