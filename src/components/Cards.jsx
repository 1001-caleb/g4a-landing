import React from 'react'
import styled from 'styled-components';


export default function Cards(props) {
    return (

        <Card>
            <img src={props.icon} alt="" />
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <a href={props.link}>Ir al sitio</a>
        </Card>

    )
}

const Card = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 290px;
    height: 329px;
    background-color: #fff;
    margin: 0 auto;
    text-align: center;
    border-radius: 15px;
    justify-content: center;
    -webkit-box-shadow: 0px 7px 13px 0px rgba(0,0,0,0.14); 
    box-shadow: 0px 7px 13px 0px rgba(0,0,0,0.14);

    img{
        width: 50px;
        height: 50px;
        margin: 0 auto;
    }

    h4{
        font-size: 2.5rem;
        color: #0A033C;
    }

    p{
        font-size: 1.6rem;
        color: #5D5A6F;
        line-height : 30px ;
        padding: 0 2rem;
    }

    a{
        /* padding: 1.2rem 3.2rem; */
        font-size: 1.6rem;
        text-decoration: none;
        border: solid 1px;
        border-radius: 5px;
        color:#9C4DF4;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        width: 162px;
        height: 44px;

        &:hover{
            background-color: #9C4DF4;
            color: #fff;
        }
    }
`