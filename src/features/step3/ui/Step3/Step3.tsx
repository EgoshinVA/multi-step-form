import React from 'react';
import {Button, Container} from "@mui/material";
import {backStep, nextStep, selectPlan} from "../../../../app/appSlice";
import {useAppDispatch, useAppSelector} from "../../../../common/hooks/hooks";
import {CustomCard} from "./Card/CustomCard";

export const Step3 = () => {
    const dispatch = useAppDispatch()
    //todo export arr to slice
    const monthly = [
        {title: 'Online service', price: '+1$/mo', description: 'Access to multiplayer games'},
        {title: 'Larger storage', price: '+2$/mo', description: 'Extra 1TB of cloud save'},
        {title: 'Customizable profile', price: '+2$/mo', description: 'Custom theme of your profile'},
    ]

    const yearly = [
        {title: 'Online service', price: '+10$/yr', description: 'Access to multiplayer games'},
        {title: 'Larger storage', price: '+20$/yr', description: 'Extra 1TB of cloud save'},
        {title: 'Customizable profile', price: '+20$/yr', description: 'Custom theme of your profile'},
    ]

    const plan = useAppSelector(selectPlan)

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
                    {plan === 'monthly' ? monthly.map(el =>
                        <CustomCard title={el.title} price={el.price} selected={true} description={el.description} setSelected={() => {}}/>)
                    : yearly.map(el => <CustomCard title={el.title} price={el.price} selected={true} description={el.description} setSelected={() => {}}/>)}
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