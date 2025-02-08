import React from 'react';
import {Button, Container} from "@mui/material";
import {useAppDispatch} from "../../../../common/hooks/hooks";
import {backStep, nextStep} from "../../../../app/appSlice";

export const Step4 = () => {
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
                <h2>Finishing up</h2>
                <p>Double-check everything looks OK before confirming.</p>


                <div style={{position: 'relative', height: '250px'}}>
                    <Button onClick={stepBack} variant="text" sx={{position: 'absolute', bottom: 0, left: 0}}>Go Back</Button>
                    <Button onClick={stepForward} variant="contained" sx={{position: 'absolute', bottom: 0, right: 0}}>Confirm</Button>
                </div>
            </Container>
        </div>
    )
}