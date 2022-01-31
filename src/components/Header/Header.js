import React from 'react'
import './Header.css';
import { createTheme, MenuItem, TextField, ThemeProvider } from '@mui/material';
import categories from '../../data/category';
import { debounce } from 'lodash';

const Header = ({ category, setCategory, word, setWord, darkMode }) => {

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: darkMode ? "#fff" : "#000"
            },
            mode: darkMode ? 'dark' : 'light'
        }
    });

    const handleChange = (language) => {
        setCategory(language);
        setWord("");
    }

    const handleText = debounce((text) => {
        setWord(text);
    }, 500);

    return (
        <div className="header">
            <span className="title">{word ? word : "Word Search"}</span>
            <div className="inputs">
                <ThemeProvider theme={darkTheme}>
                    <TextField
                        className="search"
                        label="Search a Word"
                        variant="standard"
                        onChange={(e) => handleText(e.target.value)}
                    />

                    <TextField
                        select
                        className="select"
                        label="Language"
                        value={category}
                        onChange={(e) => handleChange(e.target.value)}
                        variant="standard"
                    >
                        {categories.map((option) => (
                            <MenuItem key={option.label} value={option.label}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Header
