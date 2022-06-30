import { PostSearchAvailableCardsRequestBody } from "../contracts/PostSearchAvailableCardsRequestBody";
import { filterCardsByRequirement } from "./index";

it("A person who is unemployed return anywhere card", () => {
  const data: PostSearchAvailableCardsRequestBody = {
    employmentStatus: "partTime",
    income: {
      currency: "GBP",
      unitAmount: 10000,
    },
    address: {
      houseNumber: "12",
      postCode: "N12 199B",
    },
    datOfBirth: "12/12/1990",
  };

  const filteredCards = filterCardsByRequirement(data);

  expect(filteredCards.length).toEqual(1),
    expect(filteredCards[0].name).toEqual("Anywhere Card");
});

it("A student with income under £10k returns student card and anywhere card", () => {
  const data: PostSearchAvailableCardsRequestBody = {
    employmentStatus: "student",
    income: {
      currency: "GBP",
      unitAmount: 10000,
    },
    address: {
      houseNumber: "12",
      postCode: "N12 199B",
    },
    datOfBirth: "12/12/1990",
  };

  const filteredCards = filterCardsByRequirement(data);

  expect(filteredCards.length).toEqual(2),
    expect(filteredCards).toEqual([
      {
        id: "student-life-1",
        name: "Student Life",
        apr: 18.9,
        balanceTransferOfferMonthDuration: 0,
        purchaseOfferMonthDuration: 6,
        creditLimit: 1200,
      },
      {
        id: "anywhere-card-2",
        name: "Anywhere Card",
        apr: 33.9,
        balanceTransferOfferMonthDuration: 0,
        purchaseOfferMonthDuration: 0,
        creditLimit: 300,
      },
    ]);
});

it("Student with income over £16k returns liquid card and anywhere card", () => {
  const data: PostSearchAvailableCardsRequestBody = {
    employmentStatus: "student",
    income: {
      currency: "GBP",
      unitAmount: 16001,
    },
    address: {
      houseNumber: "12",
      postCode: "N12 199B",
    },
    datOfBirth: "12/12/1990",
  };

  const filteredCards = filterCardsByRequirement(data);

  expect(filteredCards.length).toEqual(2),
    expect(filteredCards).toEqual([
      {
        id: "student-life-1",
        name: "Student Life",
        apr: 18.9,
        balanceTransferOfferMonthDuration: 0,
        purchaseOfferMonthDuration: 6,
        creditLimit: 1200,
      },
      {
        id: "anywhere-card-2",
        name: "Anywhere Card",
        apr: 33.9,
        balanceTransferOfferMonthDuration: 0,
        purchaseOfferMonthDuration: 0,
        creditLimit: 300,
      },
      {
        id: "liquid-card-3",
        name: "Liquid Card",
        apr: 33.9,
        balanceTransferOfferMonthDuration: 12,
        purchaseOfferMonthDuration: 6,
        creditLimit: 3000,
      },
    ]);
});

it("Employee with income over £16k returns liquid card and anywhere card", () => {
  const data: PostSearchAvailableCardsRequestBody = {
    employmentStatus: "fullTime",
    income: {
      currency: "GBP",
      unitAmount: 16001,
    },
    address: {
      houseNumber: "12",
      postCode: "N12 199B",
    },
    datOfBirth: "12/12/1990",
  };

  const filteredCards = filterCardsByRequirement(data);

  expect(filteredCards.length).toEqual(2),
    expect(filteredCards).toEqual([
      {
        id: "anywhere-card-2",
        name: "Anywhere Card",
        apr: 33.9,
        balanceTransferOfferMonthDuration: 0,
        purchaseOfferMonthDuration: 0,
        creditLimit: 300,
      },
      {
        id: "liquid-card-3",
        name: "Liquid Card",
        apr: 33.9,
        balanceTransferOfferMonthDuration: 12,
        purchaseOfferMonthDuration: 6,
        creditLimit: 3000,
      },
    ]);
});
