import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

// Or Create your Own theme:
const theme = createMuiTheme({
        palette: {
            primary: {
              main:'#009688'
            },
            secondary: {
                main: '#e65100'
            }
        }
    },
);


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>,
    document.getElementById('root')
);

