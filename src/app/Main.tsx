import Grid from '@mui/material/Grid';
import React from 'react';
import {Sidebar} from "../common/components/Sidebar/Sidebar";
import {Step1} from "../features/step1/ui/Step1/Step1";
import {useAppSelector} from "../common/hooks/hooks";
import {selectStep} from "./appSlice";
import {Step2} from "../features/step2/ui/Step2/Step2";

export const Main = () => {
    const step = useAppSelector(selectStep)

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2 />
            default:
                return <Step1 />
        }
    };


    return (
        <div style={{backgroundColor: "#ffffff", width: "80%", padding: 20}}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Sidebar/>
                </Grid>
                <Grid item xs={8}>
                    {renderStep()}
                </Grid>
            </Grid>
        </div>
    )
}