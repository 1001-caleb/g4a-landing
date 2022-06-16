import React from 'react'
import styled from 'styled-components'

export default function Hero() {
  return (
    <>
        <Section>
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

    h3{
        font-size: 3.5rem;
        color: #0A033C;

        span{
            font-size: 3.5rem;
            color: #FF6652;
        }
    }
`
