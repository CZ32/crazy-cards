import { PostSearchAvailableCardsRequestBody } from "../contracts/PostSearchAvailableCardsRequestBody";
import { Card } from "../types";
import { cardData } from "../data";

export const filterCardsByRequirement = (
  userData: PostSearchAvailableCardsRequestBody
): Card[] => {
  //Can user have liquid card
  //! income > 16k
  //! isGoodEmploymentStatus === 'partTime' || 'full-time' || 'student'
  //Can user have Student card
  //! Is user a student?
  //Any user can have anywhere card
  //!anyone
  return cardData;
};
