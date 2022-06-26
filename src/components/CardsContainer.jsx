import { Contenedor } from './styleds/CardContainer.styled';
import Cards from './Cards';

export default function CardsContainer() {

    const cards = [
        {
            id: 1,
            icon: 'https://i.imgur.com/WL9LIEc.png',
            title: 'Discord',
            description: 'En nuestra comunidad de discord podrás encontrar cursos gratis, guias, talleres proyectos y una comunidad dispuesta a crecer contigo.',
            link: ''
        },

        {
            id: 2,
            icon: 'https://i.imgur.com/50x9MZ7.png',
            title: 'Guias',
            description: 'Todos las rutas de aprendizaje y recursos que te ofrecemos para fortalecer tus habilidades.',
            link: 'https://github.com/guides4all'
        },

        {
            id: 3,
            icon: 'https://i.imgur.com/CLGZUX6.png',
            title: 'Youtube',
            description: 'Nuestros cursos, tutoriales y contenido relacionado a la programación y tecnologia en general.',
            link: 'https://www.youtube.com/channel/UCgIzjIEuTsQMl6kb9BOD6mw'
        },

        {
            id: 4,
            icon: 'https://i.imgur.com/EIMjwxp.png',
            title: 'Tiktok',
            description: 'Contenido resumido y recopilación de recursos en general.',
            link: 'https://www.tiktok.com/@guides4all'
        },

        {
            id: 5,
            icon: 'https://i.imgur.com/YdR7HNA.png',
            title: 'Twitter',
            description: 'Hilos con recursos e información relevante en programación y tecnologia.',
            link: 'https://twitter.com/Guides4A'
        },

        {
            id: 6,
            icon: 'https://i.imgur.com/ngSDt78.png',
            title: 'Instagram',
            description: 'Recopilación de cheatsheets de distintas tecnologias y lenguajes e historias avisando sobre contenido y mas.',
            link: 'https://www.instagram.com/guides4all/?hl=es-la'
        },

        {
            id: 7,
            icon: 'https://i.imgur.com/dp2pa78.png',
            title: 'Web',
            description: 'Aquí podrás realizar todos nuestros cursos de una manera mas inmersiva y tener todo lo que ofrecemos en un solo lugar.',
            link: ''
        },

        {
            id: 7,
            icon: 'https://i.imgur.com/a1fziFg.png',
            title: 'Twitch',
            description: 'Directos programando, resolviendo retos y hablando con la comunidad.',
            link: 'https://www.twitch.tv/guides4all'
        },

    ];

    return (
        <>
            <Contenedor>
                {cards.map(card => {
                    return <Cards animate={{}}
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