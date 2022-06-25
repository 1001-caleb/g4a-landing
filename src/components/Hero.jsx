import {Section, Tag, Parrafo} from './styleds/Hero.styled'

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
                <Parrafo>
                    Iniciativa G4A (Guides for all), donde buscamos centralizar contenido de calidad para aprender programación en un solo lugar. 
                </Parrafo>
            </Section>
        </>
    )
}