import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material';
import './Footer.css'

const Footer = (darkMode) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: darkMode ? "#fff" : "#000"
            },
            mode: darkMode ? 'dark' : 'light'
        }
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <div className="footer-container" >
                <div className="creator">Made by
                    <a href="https://github.com/saideepd/" target="_blank" rel="noreferrer" title="Saideep's GitHub"> Saideep Dicholkar</a>
                </div>
                <div className="icon-attribution">Icons made by <a href="https://www.freepik.com" target="_blank" rel="noreferrer" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" target="_blank" rel="noreferrer" title="Flaticon">www.flaticon.com</a>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default Footer
