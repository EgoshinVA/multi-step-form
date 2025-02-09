import {createSlice} from "@reduxjs/toolkit";

type Step = 1 | 2 | 3 | 4

const initialState = {
    step: 1 as Step,
    plan: 'monthly' as 'yearly' | 'monthly',
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
        changePlan: create.reducer((state) => {
            state.plan = state.plan === 'monthly' ? 'yearly' : 'monthly'
        })
    }),
    selectors: {
        selectStep: state => state.step,
        selectPlan: state => state.plan
    }
})

export const {nextStep, backStep, changePlan} = appSlice.actions;
export const {selectStep, selectPlan} = appSlice.selectors

export default appSlice.reducer;