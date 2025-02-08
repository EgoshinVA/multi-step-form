import Grid from '@mui/material/Grid';
import React from 'react';
import {Sidebar} from "../common/components/Sidebar/Sidebar";
import {Step1} from "../features/step1/ui/Step1/Step1";
import {useAppSelector} from "../common/hooks/hooks";
import {selectStep} from "./appSlice";
import {Step2} from "../features/step2/ui/Step2/Step2";
import {Step3} from "../features/step3/ui/Step3/Step3";
import {Step4} from "../features/step4/ui/Step4/Step4";

export const Main = () => {
    const step = useAppSelector(selectStep)

    const renderStep = () => {
        switch (step) {
            case 1:
                return <Step1 />
            case 2:
                return <Step2 />
            case 3:
                return <Step3 />
            case 4:
                return <Step4 />
            default:
                return <Step1 />
        }
    };


    return (
        <div style={{backgroundColor: "#ffffff", width: "80%", padding: 20, borderRadius: 10}}>
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