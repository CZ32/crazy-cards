import joi from "joi";

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

export const PostSearchAvailableCardsRequestBodySchema = joi
  .object()
  .keys({
    employmentStatus: joi
      .string()
      .valid("fullTime", "student", "partTime", "unemployed")
      .required(),
    income: joi.object().keys({
      currency: joi.string().valid("GBP").required(),
      unitAmount: joi.number().integer().min(1).max(100000000000000).required(),
    }),
    address: joi.object().keys({
      houseNumber: joi.string().required(),
      postCode: joi.string().required(),
    }),
    dateOfBirth: joi
      .date()
      .max("01-01-2003")
      .iso()
      .messages({
        "date.format": `Date format is YYYY-MM-DD`,
        "date.max": `Age must be 18+`,
      })
      .required(),
  })
  .required();
