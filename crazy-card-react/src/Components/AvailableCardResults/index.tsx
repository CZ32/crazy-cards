import { useEffect, useState } from "react";
import { Card } from "../../types";

const calculateTotalCredit = (cards: Card[]) =>
  cards.length > 0
    ? cards
        .map((card: Card) => card.creditLimit)
        .reduce((acc, cur) => (acc += cur))
    : 0;

export function AvailableCardResults({
  cards,
  onGoBack,
  handleVisitCardDetails
}: {
  cards: Card[];
  onGoBack: () => void;
  handleVisitCardDetails: (cardToVisitId: string) => void;
}) {
  const [checkedSelectedCards, setCheckedSelectedCards] = useState(
    new Array(cards.length).fill(false)
  );
  const [totalCreditSelected, setTotalCreditSelected] = useState<number>(
    calculateTotalCredit(checkedSelectedCards)
  );

  useEffect(() => console.log("hey"));

  useEffect(() => {
    const cardsToSum = cards.filter(
      (card: Card, index: number) => checkedSelectedCards[index] === true
    );
    setTotalCreditSelected(calculateTotalCredit(cardsToSum));
  }, [checkedSelectedCards]);

  const handleChange = (position: number) => {
    const updatedCheckedCards = checkedSelectedCards.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedSelectedCards(updatedCheckedCards);
  };

  return (
    <>
      <p>Total Selected Credit Limit: £{totalCreditSelected}.00</p>
      <ul>
        {cards.map((card: Card, index: number) => (
          <li key={`crazy-card-${card.name}`}>
            <div>
              <p>
                <strong>{card.name}</strong>
              </p>
              <p>Credit Available: {card.creditLimit}</p>
              <div>
                <label>Select Card</label>
                <input
                  type="checkbox"
                  value={card.creditLimit}
                  checked={checkedSelectedCards[index]}
                  onChange={() => handleChange(index)}
                />
                <button onClick={() => handleVisitCardDetails(card.id)}>{`Check ${card.name} details`}</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <button type="button" onClick={onGoBack} className="submitButton">
        Go Back
      </button>
    </>
  );
}
