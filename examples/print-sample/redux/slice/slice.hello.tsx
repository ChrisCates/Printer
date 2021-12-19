import { createSlice } from "@reduxjs/toolkit";

export const helloInitialState = {

}

export const helloSlice = createSlice({
    name: 'hello',
    initialState: helloInitialState,
    reducers: {

    },
});

export const { } = helloSlice.actions;