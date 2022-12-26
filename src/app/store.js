import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../components/StudentSlice'
export default configureStore({
    reducer: {users: userReducer}
})