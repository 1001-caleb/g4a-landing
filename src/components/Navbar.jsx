import React from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import { useState } from "react";

export default function Navbar() {

  const [clicked, setClicked] = useState(false)

  const handleClick = () =>{
    setClicked(!clicked)
  }
  return (
    <>
      <NabarContainer>
        <figure><img src="../assets/logo-g4a.png" alt="" /></figure>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href="">Conocenos</a>
          <a href="">Aprende</a>
          <a href="">Comunidad</a>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick}/>
        </div>
        
      </NabarContainer>
    </>
  );
}

const NabarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 4rem;
  
  h2 {
    font-size: 3rem;
    color: #0A033C;
  }

  .links {
    display: flex;
    gap: 4rem;

     a {
        text-decoration: none;
        font-size: 2rem;
        color: #0A033C;
      }
  }
  .burguer{
    @media(min-width:768px){
      display: none;
    }
  }

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    margin: 0 auto;
    text-align: center;
    @media(min-width:768px){
      a{
        margin-left: 4rem;
        color: #0A033C;
      }
      position: initial;
      margin: 0;
      display: inline;
    }
  }

  .links.active{
   
    width: 100%;
    flex-direction: column;
    position: absolute;
    margin: 0 auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
  }
`;
