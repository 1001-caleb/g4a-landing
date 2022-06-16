import React from 'react'
import styled from 'styled-components'

export default function Hero() {
  return (
    <>
        <Section>
            <Tag>
                Aprendizaje guiado
            </Tag>
            <h3>
                Todo lo que necesitas
                para <span>aprender </span>
                en un solo lugar
            </h3>
        </Section>
    </>
  )
}

const Section = styled.section`
    display: flex;
    flex-direction:column;
    padding: 2rem 4rem;
    gap: 3rem;
    text-align: center;
    align-items: center;
    
    h3{
        font-size: 2.5rem;
        color: #0A033C;
       

        @media(min-width: 768px){
            font-size: 3.5rem;
            
            
        }

        span{
            font-size: 2.5rem;
            color: #FF6652;

            @media(min-width: 768px){
            font-size: 3.5rem;
            
        }
        }
    }
`

const Tag = styled.h4`
    background-color: #fff;
    color: #FF6652;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    width: 190px;
    height: 36px;
`
