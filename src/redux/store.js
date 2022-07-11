import { configureStore } from '@reduxjs/toolkit'
import {userReducer, signInReducer} from './reducers'

export const Store = configureStore({
    reducer: {
        users: userReducer,
        signIn: signInReducer,
    }
})
