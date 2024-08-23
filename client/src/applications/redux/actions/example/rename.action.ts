import type { PayloadAction } from '@reduxjs/toolkit'

import { ExampleRenameCommand } from '../../commands/example/rename.command'
import { ExampleState } from '../../slices/example.slice'

export default function _exampleRenameAction(state: ExampleState, action: PayloadAction<ExampleRenameCommand>) {
    state.name = action.payload.name
}
