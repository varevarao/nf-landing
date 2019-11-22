import React from 'react';
import Header from './header';
import Sections from './sections';
import { ThemeProvider } from 'styled-components';

const theme = {
    breakpoints: {
        xs: 0,
        sm: 544,
        md: 768,
        lg: 992,
        xl: 1200,
    }
}

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            {/* Main app header */}
            <Header />

            {/* The various sections */}
            <Sections />
        </ThemeProvider>
    )
};

export default App;
