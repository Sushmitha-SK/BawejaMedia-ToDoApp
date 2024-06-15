import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [
        { id: 1, description: 'Sample Task 1', deadline: new Date(), completed: false, pending: false },
        { id: 2, description: 'Sample Task 2', deadline: new Date(), completed: false, pending: false },
        { id: 3, description: 'Sample Task 3', deadline: new Date(), completed: false, pending: false },
    ],
    showInput: false,
};

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload);
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },

        toggleInput: (state) => {
            state.showInput = !state.showInput;
        },
       
    },
});

export const { addTask, deleteTask, toggleInput } = tasksSlice.actions;
export default tasksSlice.reducer;
