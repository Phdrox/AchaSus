import { configureStore } from "@reduxjs/toolkit"
import establishmentReducer from "../reducer/reducer"

export const store= configureStore({
    reducer:{ 
        establishment:establishmentReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store