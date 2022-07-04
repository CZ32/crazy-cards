import { Card } from "../../types";

export function CrazyCard({
  card,
  onGoBack,
}: {
  card: Card;
  onGoBack: () => void;
}) {
  return (
    <>
      <div>
        <p>
          <strong>{card.name}</strong>
        </p>
        <p>Apr: {card.apr}</p>
        <p>
          Balance Transfer Offer Duration:{" "}
          {card.balanceTransferOfferMonthDuration}
        </p>
        <p>Purchase Offer Duration: {card.purchaseOfferMonthDuration}</p>
        <p>Credit Available: {card.creditLimit}</p>
        <button type="button" onClick={onGoBack} className="submitButton">
          Go Back
        </button>
      </div>
    </>
  );
}
