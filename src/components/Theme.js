import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';

const Theme = ({ children }) => {
	const theme = useSelector(state => state.app.theme);
	const muiTheme = createMuiTheme(theme);
	return (
		<ThemeProvider theme={muiTheme}>
			{ children }
		</ThemeProvider>
	);
}

export default Theme;