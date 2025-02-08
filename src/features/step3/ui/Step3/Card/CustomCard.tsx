import React from 'react';
import {CardContent, Typography} from "@mui/material";
import Checkbox from '@mui/material/Checkbox';

type Props = {
    title: string
    price: string
    description: string
    selected: boolean
    setSelected: () => void
}

export const CustomCard = ({title, price, selected, description, setSelected}: Props) => {

    return (
        <CardContent style={{
            border: "solid 1px black",
            display: "flex",
            borderRadius: 5,
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <Checkbox/>
            <div>
                <Typography variant="h6">{title}</Typography>
                <Typography>{description}</Typography>
            </div>
            <Typography sx={{color: 'text.secondary', mb: 1.5}}>{price}</Typography>
        </CardContent>
    )
}
//todo сделать осн блок по высоте одним, кнопки без маргина