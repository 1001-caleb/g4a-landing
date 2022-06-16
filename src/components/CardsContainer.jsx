import React, { useState } from 'react';
import styled from 'styled-components';
import Cards from './Cards';

export default function CardsContainer() {

    const [cards, setCards] = useState([
        {
            id: 1,
            icon: '../../assets/discord.png',
            title: 'Discord',
            description: 'En nuestra comunidad de discord podrás encontrar cursos gratis, guias, proyectos y una comunidad dispuesta a crecer contigo.',
            link: ''
        },

        {
            id: 2,
            icon: '../../assets/github.png',
            title: 'Guias',
            description: 'Todos las rutas de aprendizaje y recursos que te ofrecemos para fortalecer tus habilidades.',
            link:''
        },

        {
            id: 3,
            icon: '../../assets/yt.png',
            title: 'Youtube',
            description: 'Nuestros cursos, tutoriales y contenido relacionado a la programación y tecnologia en general.',
            link:''
        },

        {
            id: 4,
            icon: '../../assets/tk.png',
            title: 'Tiktok',
            description: 'Contenido resumido y recopilación de recursos en general.',
            link:''
        },

        {
            id: 5,
            icon: '../../assets/tw.png',
            title: 'Twitter',
            description: 'Hilos con recursos e información relevante en programación y tecnologia.',
            link:''
        },

        {
            id: 6,
            icon: '../../assets/ig.png',
            title: 'Instagram',
            description: 'Recopilación de cheatsheets de distintas tecnologias y lenguajes e historias avisando sobre contenido y mas.',
            link:''
        },

        {
            id: 7,
            icon: '../../assets/web.png',
            title: 'Web',
            description: 'Aquí podrás realizar todos nuestros cursos de una manera mas inmersiva y tener todo lo que ofrecemos en un solo lugar.',
            link: ''
        },

    ]);

  return (
        <>
            <Contenedor>
                {cards.map(card =>{
                    return <Cards 
                        key={card.id}
                        icon={card.icon}
                        title={card.title}
                        description={card.description}
                        link={card.link}
                        >
                    </Cards>
                })}
            </Contenedor>
        </>
  )
}

const Contenedor = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    padding: 1rem 2rem;

    @media(min-width:768px){
        padding: 2rem 4rem;
    }
`

