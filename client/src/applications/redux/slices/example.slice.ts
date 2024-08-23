import { createSlice } from '@reduxjs/toolkit'

import _exampleRenameAction from '../actions/example/rename.action'

export interface ExampleState {
    name: string
}

const initialState: ExampleState = {
    name: '',
}

const exampleSlice = createSlice({
    initialState,
    name: 'exampleSlice',
    reducers: {
        exampleRenameAction: _exampleRenameAction,
    },
})

export const { exampleRenameAction } = exampleSlice.actions
export default exampleSlice.reducer
