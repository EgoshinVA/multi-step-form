import React, {useState} from 'react';
import {Button, Card, Container, Typography} from "@mui/material";
import {CustomCard} from "./Card/CustomCard";
import arcade from '../../../../assets/images/icon-arcade.svg'
import advanced from '../../../../assets/images/icon-advanced.svg'
import pro from '../../../../assets/images/icon-pro.svg'
import Switch from '@mui/material/Switch';
import {useAppDispatch} from "../../../../common/hooks/hooks";
import {backStep, nextStep} from "../../../../app/appSlice";

export const Step2 = () => {
    const prices = [] //todo add monthly and yearly prices
    const dispatch = useAppDispatch()

    const [currentCard, setCurrentCard] = useState<number>(1)
    const [plan, setPlan] = useState<'monthly' | 'yearly'>('monthly')

    const changePlan = () => {
        plan === 'monthly' ? setPlan('yearly') : setPlan('monthly')
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
                    <Card variant="outlined">{<CustomCard setCurrentCard={() => setCurrentCard(1)}
                                                          active={currentCard === 1} image={arcade} title={"Arcade"}
                                                          price={"$9/mo"}/>}</Card>
                    <Card variant="outlined">{<CustomCard setCurrentCard={() => setCurrentCard(2)}
                                                          active={currentCard === 2} image={advanced} title={"Advanced"}
                                                          price={"$12/mo"}/>}</Card>
                    <Card variant="outlined">{<CustomCard setCurrentCard={() => setCurrentCard(3)}
                                                          active={currentCard === 3} image={pro} title={"Pro"}
                                                          price={"$15/mo"}/>}</Card>
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Typography variant="h6" component="div">Monthly</Typography>
                    <Switch onChange={changePlan} checked={plan === 'yearly'}/>
                    <Typography variant="h6" component="div">Yearly</Typography>
                </div>
                <div style={{position: 'relative', height: '250px'}}>
                    <Button onClick={stepBack} variant="text" sx={{position: 'absolute', bottom: 0, left: 0}}>Prev Step</Button>
                    <Button onClick={stepForward} variant="contained" sx={{position: 'absolute', bottom: 0, right: 0}}>Next Step</Button>
                </div>
            </Container>
        </div>
    )
}

//todo подсветка выбранного варианта