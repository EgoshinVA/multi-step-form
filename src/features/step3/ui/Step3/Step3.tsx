import React from 'react';
import {Button, Container} from "@mui/material";
import {backStep, nextStep} from "../../../../app/appSlice";
import {useAppDispatch} from "../../../../common/hooks/hooks";
import {CustomCard} from "./Card/CustomCard";

export const Step3 = () => {
    const dispatch = useAppDispatch()

    const stepBack = () => {
        dispatch(backStep())
    }

    const stepForward = () => {
        dispatch(nextStep())
    }

    return (
        <div>
            <Container maxWidth="xs">
                <h2>Pick add-ons</h2>
                <p>Add-ons help enhance your gaming experience.</p>
                <div style={{display: "flex", flexDirection: "column", gap: 2}}>
                    <CustomCard title={'Online service'} price={'+1$/mo'} selected={true} description={'Access to multiplayer games'} setSelected={() => {}}/>
                    <CustomCard title={'Online service'} price={'+2$/mo'} selected={true} description={'Extra 1TB of cloud save'} setSelected={() => {}}/>
                    <CustomCard title={'Online service'} price={'+2$/mo'} selected={true} description={'Custom theme of your profile'} setSelected={() => {}}/>
                </div>
                <div style={{position: 'relative', height: '250px'}}>
                    <Button onClick={stepBack} variant="text" sx={{position: 'absolute', bottom: 0, left: 0}}>Prev
                        Step</Button>
                    <Button onClick={stepForward} variant="contained" sx={{position: 'absolute', bottom: 0, right: 0}}>Next
                        Step</Button>
                </div>
            </Container>
        </div>
    )
}