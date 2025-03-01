import { configureStore } from '@reduxjs/toolkit'
import RkReducer from './TkReducer'

const TkStore = configureStore({
    reducer:{
        Component:RkReducer
    }
})

export default TkStore
