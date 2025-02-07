import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {Button, Container, TextField} from "@mui/material";
import {useAppDispatch} from "../../../../common/hooks/hooks";
import {nextStep} from "../../../../app/appSlice";

type Inputs = {
    name: string,
    email: string,
    phone: string,
}

export const Step1 = () => {
    const {handleSubmit, register, formState: {errors}} = useForm<Inputs>()
    const dispatch = useAppDispatch()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        dispatch(nextStep())
    }

    return (
        <div>
            <Container maxWidth="xs">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h2>Personal info</h2>
                    <p> Please provide your name, email address, and phone number.</p>
                    <div style={{display: "flex", flexDirection: "column", gap: 5}}>
                        <TextField label="Name" variant="outlined" {...register('name')}/>
                        <TextField label="Email address" variant="outlined" {...register('email')}/>
                        <TextField label="Phone number" variant="outlined" {...register('phone')}/>
                    </div>
                    <div style={{position: 'relative', height: '250px'}}>
                        <Button type={'submit'} variant="contained" sx={{position: 'absolute', bottom: 0, right: 0}}>Next
                            Step</Button>
                    </div>
                </form>
            </Container>
        </div>
    )
}

//todo tdd every step