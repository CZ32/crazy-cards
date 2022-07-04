import { Card } from "../../types"


export function AvailableCardResults ({ cards } : { cards: Card[]}) {
    return (
        <ul>
            { cards.map((card: Card) => <li>{card.name}</li>)}
        </ul>
    )
}