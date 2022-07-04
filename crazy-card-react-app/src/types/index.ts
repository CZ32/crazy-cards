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

export interface AppState {
    screen: 'form' | 'pending' | "results" | 'card'
    formData: FormData,
    availableCards: undefined | Card[]
  }

export interface FormData {
    employmentStatus: undefined | string,
    income: {
      currency: "GBP",
      unitAmount: undefined | number
    },
    address: {
      houseNumber: undefined | string
      postCode: undefined | string
    },
    dateOfBirth: undefined | string
  }

export interface PostSearchAvailableCardsResponseBody {
  cards: Card[];
}
