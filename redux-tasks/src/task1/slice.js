import {createSlice} from '@reduxjs/toolkit'

const initialState={
    value:0,
};

const CountSlice=createSlice({

    name:"Counter",
    initialState,
    reducers: {
        increment: (state,action)=>{
            state.value+= action.payload;
        },
        decrement: (state,action)=>{
            state.value-=action.payload;
        },
        reset: (state,action)=>{
            state.value=0;
        }
    }
});
export const {increment,decrement,reset} = CountSlice.actions;
export default CountSlice.reducer;