import React, {useState} from 'react'
import "/style.css";
import Navbar from "/src/components/Navbar"
import Hero from '/src/components/Hero'
import CardsContainer from '/src/components/CardsContainer'
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes";

export default function app() {
    const [theme, setTheme] = useState("light");

    const themeToggler = () => {
      theme === "light" ? setTheme("dark") : setTheme("light");
    };

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
        <GlobalStyles />
        <StyledApp>
            {/* <button onClick={() => themeToggler()}>Change Theme</button> */}
            <Navbar/>
            <Hero />
            <CardsContainer />
        </StyledApp>
    </ThemeProvider>
  )
}

const StyledApp = styled.div`
  color: ${(props) => props.theme.fontColor};
`;