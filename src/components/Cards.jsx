import { Card } from "./styleds/Cards.styled"

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