import React from 'react';
import './App.css';
import {Main} from "./Main";
import Box from "@mui/material/Box";
import {Container} from "@mui/material";

function App() {
    return (
        <div style={{
            backgroundColor: "#eef5ff",
            height: '100vh',
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <Container>
                <Box sx={{bgcolor: '#cfe8fc', display: "flex", justifyContent: "center", padding: "30px 0", borderRadius: 5}}>
                    <Main/>
                </Box>
            </Container>

        </div>
    );
}

export default App;

//todo добавить процесс выполнения loader, стили вынести