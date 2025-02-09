import React from 'react';
import {CardContent, Typography} from "@mui/material";

type Props = {
    title: string
    price: string
    image: string
    active: boolean
    setCurrentCard: () => void
}

export const CustomCard = ({title, price, image, active, setCurrentCard}: Props) => {
    const activeClass = {border: "1px solid #6b65a2", borderRadius: 4, width: 90}

    return (
        <React.Fragment>
            <CardContent onClick={setCurrentCard} style={active ? activeClass : {borderRadius: 4, width: 90}}>
                <img src={image} alt={`${image}`}/>
                <Typography style={{marginTop: 25}} variant="h6" component="div">{title}</Typography>
                <Typography sx={{color: 'text.secondary', mb: 1.5}}>{price}</Typography>
            </CardContent>
        </React.Fragment>
    )
}