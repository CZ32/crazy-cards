import Joi from "joi";

export const PostSearchAvailableCardsRequestBodySchema = Joi
  .object()
  .keys({
    employmentStatus: Joi
      .string()
      .valid("fullTime", "student", "partTime", "unemployed")
      .required(),
    income: Joi.object().keys({
      currency: Joi.string().valid("GBP").required(),
      unitAmount: Joi.number().integer().min(1).max(100000000000000).required(),
    }),
    address: Joi.object().keys({
      houseNumber: Joi.string().required(),
      postCode: Joi.string().required(),
    }),
    dateOfBirth: Joi.string().required(),
  })
  .required();
