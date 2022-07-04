import { Card } from "../../types";

export function AvailableCardResults({
  cards,
  onGoBack,
}: {
  cards: Card[];
  onGoBack: () => void;
}) {
  return (
    <>
      <ul>
        {cards.map((card: Card) => (
          <li className="crazyCardContainer">
            <div>
              <p><strong>{card.name}</strong></p>
              <p>Apr: {card.apr}</p>
              <p>
                Balance Transfer Offer Duration:{" "}
                {card.balanceTransferOfferMonthDuration}
              </p>
              <p>Purchase Offer Duration: {card.purchaseOfferMonthDuration}</p>
              <p>Credit Available: {card.creditLimit}</p>
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
