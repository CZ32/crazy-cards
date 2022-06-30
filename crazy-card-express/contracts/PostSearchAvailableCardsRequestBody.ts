export interface PostSearchAvailableCardsRequestBody  {
    employmentStatus: 'fullTime' | 'student' | 'partTime', //student card only avail for students
    income: {
        currency: 'GBP',
        unitAmount: number //must be greater than 16k for liquid card
    },
    address: {
        houseNumber: string,
        postCode: string
    },
    datOfBirth: 'string'
}