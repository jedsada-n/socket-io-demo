import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import exampleSlice from './slices/example.slice'

const store = configureStore({
    reducer: {
        example: exampleSlice,
    },
})

export type AppState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store
