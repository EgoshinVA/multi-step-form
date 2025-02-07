import * as React from 'react';
import Box from '@mui/material/Box';
import {useAppSelector} from "../../hooks/hooks";
import {selectStep} from "../../../app/appSlice";
import {Chip, Stack} from "@mui/material";
import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import Filter3Icon from '@mui/icons-material/Filter3';
import Filter4Icon from '@mui/icons-material/Filter4';
import background from '../../../assets/images/bg-sidebar-desktop.svg'

export const Sidebar = () => {
    const step = useAppSelector(selectStep)

    return (
        <Box sx={{backgroundImage: `url(${background})`, width: 274, height: 568}}>
            <Stack direction="column" spacing={1} sx={{width: 150}}>
                <Chip icon={<Filter1Icon />} color="default" label="Step 1" variant={step === 1 ? "filled" : "outlined"}/>
                <Chip icon={<Filter2Icon />} color="default" label="Step 2" variant={step === 2 ? "filled" : "outlined"} />
                <Chip icon={<Filter3Icon />} color="default" label="Step 3" variant={step === 3 ? "filled" : "outlined"} />
                <Chip icon={<Filter4Icon />} color="default" label="Step 4" variant={step === 4 ? "filled" : "outlined"} />
            </Stack>
        </Box>
    );
}