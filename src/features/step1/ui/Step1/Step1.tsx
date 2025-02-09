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
                        <TextField error={!!errors.name} helperText={errors.name ? errors.name.message : ''} placeholder={'e.g. Stephen King'} label="Name"
                                   variant="outlined" {...register('name', {
                            required: "Field is required"
                        })}/>
                        <TextField error={!!errors.email} helperText={errors.email ? errors.email.message : ''} placeholder={'e.g. stephenking@lorem.com'} label="Email address"
                                   variant="outlined" {...register('email', {
                            required: "Field is required",
                            pattern: {
                                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: "Incorrect email address",
                            },
                        })}/>
                        <TextField error={!!errors.phone} helperText={errors.phone ? errors.phone.message : ''} placeholder={'e.g. +1 234 456 7890'} label="Phone number"
                                   variant="outlined" {...register('phone', {
                            required: "Field is required",
                            minLength: {
                                value: 10,
                                message: "Number too short"
                            }
                        })}/>
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