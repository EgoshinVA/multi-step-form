import React, {useState} from 'react';
import {Button, Card, Container, Typography} from "@mui/material";
import {CustomCard} from "./Card/CustomCard";
import arcade from '../../../../assets/images/icon-arcade.svg'
import advanced from '../../../../assets/images/icon-advanced.svg'
import pro from '../../../../assets/images/icon-pro.svg'
import Switch from '@mui/material/Switch';
import {useAppDispatch, useAppSelector} from "../../../../common/hooks/hooks";
import {backStep, changePlan, nextStep, selectPlan} from "../../../../app/appSlice";

export const Step2 = () => {
    const monthlyPrices = [
        {id: 1, title: 'Arcade', price: '$9/mo', image: arcade},
        {id: 2, title: 'Advanced', price: '$12/mo', image: advanced},
        {id: 3, title: 'Pro', price: '$15/mo', image: pro},
    ]
    const yearlyPrices = [
        {id: 1, title: 'Arcade', price: '$90/yr', image: arcade},
        {id: 2, title: 'Advanced', price: '$120/yr', image: advanced},
        {id: 3, title: 'Pro', price: '$150/yr', image: pro},
    ]
    const dispatch = useAppDispatch()

    const [currentCard, setCurrentCard] = useState<number>(1)
    const plan = useAppSelector(selectPlan)

    const changePlanHandler = () => {
        dispatch(changePlan())
    }

    const stepBack = () => {
        dispatch(backStep())
    }

    const stepForward = () => {
        dispatch(nextStep())
    }

    return (
        <div>
            <Container maxWidth="xs">
                <h2>Select your plan</h2>
                <p>You have the option of monthly or yearly billing.</p>
                <div style={{display: 'flex', gap: 5}}>
                    {plan === 'monthly' ? monthlyPrices.map(el =>
                        <Card variant="outlined">{<CustomCard setCurrentCard={() => setCurrentCard(el.id)}
                                                              active={currentCard === el.id} image={el.image}
                                                              title={el.title}
                                                              price={el.price}/>}</Card>) : yearlyPrices.map(el =>
                        <Card variant="outlined">{<CustomCard setCurrentCard={() => setCurrentCard(el.id)}
                                                              active={currentCard === el.id} image={el.image}
                                                              title={el.title}
                                                              price={el.price}/>}</Card>)}
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Typography variant="h6" component="div">Monthly</Typography>
                    <Switch onChange={changePlanHandler} checked={plan === 'yearly'}/>
                    <Typography variant="h6" component="div">Yearly</Typography>
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

//todo подсветка выбранного варианта