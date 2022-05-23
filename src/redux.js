import {createSlice, configureStore} from '@reduxjs/toolkit'
const todoSlice = createSlice({
    name: 'todo',
    initialState: [
        {id: 1 , text: 'Tache 1', done: false},
        {id: 2 , text: 'Tache 2', done: false},
    ],
    reducers: {
        addTask: (state,action) => {
            const newTask = {
                id: Date.now(),
                done: false,
                text: action.payload
            }
            state.push(newTask);
        },
        toggleTask : (state,action) => {
            const task= state.find(t=>t.id === action.payload);
            task.done =!task.done
        },
        deleteTask : (state,action) => {
            state=state.filter(t=>t.id !==action.payload);
            return state;
        },
    },
});
export const {addTask, deleteTask, toggleTask}= todoSlice.actions;

 export const store= configureStore({
    reducer : {
        todo: todoSlice.reducer
    }
})

