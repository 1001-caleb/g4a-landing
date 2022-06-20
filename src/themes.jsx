import { createGlobalStyle } from "styled-components";

export const lightTheme = {
    body: '#F7F5FA',
    fontColor: '#5D5A6F'
};

export const darkTheme = {
    body: '#131313',
    color: '#F7F5FA'
}

export const GlobalStyles = createGlobalStyle`
	body {
		background-color: ${(props) => props.theme.body};
	}
`;