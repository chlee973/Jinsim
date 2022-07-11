import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers'

export const Store = configureStore({
    reducer: {
        users: userReducer,
    }
})
