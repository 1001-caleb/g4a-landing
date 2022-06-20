import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    flex-direction:column;
    padding: 2rem 4rem;
    gap: 3rem;
    text-align: center;
    align-items: center;

    h3{
        font-size: 2.5rem;
        color: #0A033C;
        line-height: 40px;

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

export const Tag = styled.h4`
    background-color: #fff;
    color: #FF6652;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    width: 190px;
    height: 36px;
    border-radius: 5px;
`
export const Parrafo = styled.p`
    font-size: 1.6rem;
    color: #5D5A6F;
    line-height: 30px;

    @media (min-width: 768px){
        font-size: 2rem;
    }

`