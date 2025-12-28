import {configureStore} from '@reduxjs/toolkit'
import CounterReducer from './slice'

export const store=configureStore({
    reducer:{
        counter:CounterReducer,
    }
})