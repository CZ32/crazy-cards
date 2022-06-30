import { PostSearchAvailableCardsRequestBody } from "../contracts/PostSearchAvailableCardsRequestBody";
import { Card } from "../types";
import { cardData } from "../data";

export const filterCardsByRequirement = (
  userData: PostSearchAvailableCardsRequestBody
): Card[] => {
  const canUserHaveLiquidCard = userData.income.currency === "GBP" && userData.income.unitAmount > 16000
  const canUserHaveStudentCard = userData.employmentStatus === "student";
  let cards = cardData

  if (!canUserHaveLiquidCard) {
    cards = cards.filter((card) => card.name !== "Liquid Card")  // For some reason I have to do it this way. Does not update cards otherwise
  }

  if (!canUserHaveStudentCard) {
   cards = cards.filter((card) => card.name !== "Student Life");
  }
  
  return cards;
};