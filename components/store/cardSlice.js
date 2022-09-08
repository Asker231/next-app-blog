import { createSlice } from "@reduxjs/toolkit";

const cardSlice =createSlice({
    name:'card',
    initialState:{
      arr:  [
           
        ]
        
    },
    reducers:{
        addCard(state,action){
        state.arr.push(action.payload)   
        console.log(action.payload);      
    }
}
})
export const {addCard} = cardSlice.actions;
export default cardSlice.reducer;