import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate();
    return (
        <header  >
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" style={{ backgroundColor: "black" }}>
                    <Toolbar>
                        <Typography onClick={() => { navigate(`/`) }} style={{ fontFamily: "Starjhol", fontSize: 40, color: "#FFE81F", cursor: "pointer" }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            StarWars
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </header >
    )
}

export default Header
