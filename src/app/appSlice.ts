import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    step: 1 as 1 | 2 | 3 | 4
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: create => ({

    }),
    selectors: {
        selectStep: state => state.step
    }
})

export const {} = appSlice.actions;
export const {selectStep} = appSlice.selectors

export default appSlice.reducer;