import { createSlice } from "@reduxjs/toolkit";

const cartslice=createSlice({
       name:"cart",
       initialState:[],
       reducers:{
             additem(state,action){
                  let existitem=state.find((item)=>item.id===action.payload.id)
                  if(existitem){
                   return state.map((item)=>item.id===action.payload.id?{...item,qty:item.qty+1}:item)
                  }
                  else{
                           state.push(action.payload);
                  }
             },
             Removeitem(state,action){
                return state.filter((item)=>item.id!==action.payload)
             },
             incrementqty(state,action){
                    return state.map((item)=>item.id===action.payload?{...item,qty:item.qty+1}:item)
             },
               decrementqty(state,action){
                    return state.map((item)=>item.id===action.payload?{...item,qty:item.qty-1}:item)
             }

       }
})


export const {additem,Removeitem,incrementqty,decrementqty}=cartslice.actions;
export default cartslice.reducer;