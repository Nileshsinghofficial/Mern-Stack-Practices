import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({

    name : "counter",
    initialState : {
        value : 0,
    },
    reducers : {
        increment : (state,action) => {
            console.log("hello");
            // console.log(JSON.stringify(state))
            console.log(action.payload)
            state.value = state.value + 1;
          
        },
        decrement : (state , action) => {
            console.log(action.payload)
            state.value = state.value - 1;
        },

        restAll : (state, action) => {
            console.log(action.payload);
            state.value = 0 ;
        }
    }
})

export const {increment, decrement, restAll} = counterSlice.actions

export default counterSlice.reducer