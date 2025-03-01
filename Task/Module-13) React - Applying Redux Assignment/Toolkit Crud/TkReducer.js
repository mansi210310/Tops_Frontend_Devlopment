import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:[]
}

const TkReducer = createSlice ({
    name: "Component",
    initialState,
    reducers:{
        insertData:(state, action)=>{
            state.data = [
                ...state.data,
                action.payload
            ]
        },
        update: (state,action)=>{
            state.data=state.data.map((i,index)=>{
                if(index == action.payload.id){
                    // i.name = action.payload.data.name
                    // i.age = action.payload.data.age
                    i = action.payload.data
                }
                return i
            })
        },
        del: (state,action)=>{
            state.data = state.data.filter((i,index)=>{
                return  index != action.payload
            })
        }
    }
})

export const { insertData, update, del } = TkReducer.actions
export default TkReducer.reducer
