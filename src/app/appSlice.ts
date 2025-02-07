import {createSlice} from "@reduxjs/toolkit";

type Step = 1 | 2 | 3 | 4

const initialState = {
    step: 1 as Step
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: create => ({
        nextStep: create.reducer((state) => {
            state.step += 1
        }),
        backStep: create.reducer((state) => {
            state.step -= 1
        }),
    }),
    selectors: {
        selectStep: state => state.step
    }
})

export const {nextStep, backStep} = appSlice.actions;
export const {selectStep} = appSlice.selectors

export default appSlice.reducer;