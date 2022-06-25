import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;

  @media(min-width:768px){
    padding: 2rem 4rem;

    }
  
  .logo{
    width: 100px;
    @media(min-width:768px){
      width: 143px;
    }
  }

  h2 {
    font-size: 3rem;
    color: #0A033C;
  }

  .links {
    display: flex;
    gap: 4rem;
    z-index: 100;

     a {
        text-decoration: none;
        font-size: 2rem;
        color: #0A033C;
        &:hover{
          color: #D8D8D8;
        }
      }
  }
  .burguer{
    z-index: 100;
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
    transition: all .6s;

    a{
      font-size: 2.5rem;
    }

    @media(min-width:768px){
      a{
        font-size: 2rem;
        margin-left: 4rem;
        color: #0A033C;
        &:hover{
          color: #FF6652;
        }
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

export const BgDiv = styled.div`
  background-color: #FF6652;
  position: absolute;
  top: -1500px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: 10;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
` 