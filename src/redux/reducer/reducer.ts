import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store/store"

interface IDataEstablishment{
    state:string;
    city:string;
    establishment:string;
}

const initialState:IDataEstablishment={
    state:'',
    city:'',
    establishment:''
}

const sliceDataEstablishment= createSlice({
    name:'establishment',
    initialState,
    reducers: {
        insertState:(establishmentState, action:PayloadAction<string>) => { 
          establishmentState.state = action.payload 
        },
        insertCity:(establishmentState, action:PayloadAction<string>) => { 
          establishmentState.city = action.payload 
        },
        insertEstablishment:(establishmentState, action:PayloadAction<string>) => { 
          establishmentState.establishment = action.payload 
        } 
    }
})

export const { insertState,insertCity,insertEstablishment } = sliceDataEstablishment.actions
export const selectEstablishmentCity = (state:RootState) => {
  return {
    city:state.establishment.city,
    establishment:state.establishment.establishment,
    state:state.establishment.state 
  }
}
export default sliceDataEstablishment.reducer
