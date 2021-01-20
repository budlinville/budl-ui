import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from '@material-ui/styles';

const Theme = ({ children }) => {
	const theme = useSelector(state => state.app.theme);
	return (
		<ThemeProvider theme={theme}>
			{ children }
		</ThemeProvider>
	);
}

export default Theme;