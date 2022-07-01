export interface Card {
  id: string;
  name: string;
  apr: number;
  balanceTransferOfferMonthDuration: number;
  purchaseOfferMonthDuration: number;
  creditLimit: number;
}

export interface PostSearchAvailableCardsRequestBody {
  employmentStatus: "fullTime" | "student" | "partTime" | "unemployed"; //student card only avail for students
  income: {
    currency: "GBP";
    unitAmount: number; //must be greater than 16k for liquid card
  };
  address: {
    houseNumber: string;
    postCode: string;
  };
  datOfBirth: string;
}

export interface PostSearchAvailableCardsResponseBody {
  cards: Card[];
}
