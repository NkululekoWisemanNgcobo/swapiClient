import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';


const Header = () => {
    return (
        <header  >
            <Box sx={{ flexGrow: 1 }} >
                <AppBar position="static" style={{ backgroundColor: "black" }}>
                    <Toolbar>
                        <Typography style={{ fontFamily: "Starjhol", fontSize: 40, color: "#FFE81F" }} variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Link to="/">
                                StarWars
                            </Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
        </header >
    )
}

export default Header
