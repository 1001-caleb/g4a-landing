import { NavbarContainer, BgDiv } from "./styleds/Navbar.styled";
import BurguerButton from "./BurguerButton";
import { useState } from "react";


export default function Navbar() {

  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(!clicked)
  }
  return (
    <>
      <NavbarContainer>
        <figure><img className='logo' src='https://i.imgur.com/fSOez4U.png' alt="" /></figure>
        <div className={`links ${clicked ? 'active' : ''}`}>
          <a href="">Conocenos</a>
          <a href="">Aprende</a>
          <a href="">Comunidad</a>
        </div>
        <div className="burguer">
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavbarContainer>
    </>
  );
}


