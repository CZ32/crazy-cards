import express from "express";
import {
  PostSearchAvailableCardsRequestBody,
  PostSearchAvailableCardsRequestBodySchema,
} from "../contracts/PostSearchAvailableCardsRequestBody";
import { PostSearchAvailableCardsResponseBody } from "../contracts/PostSearchAvailableCardsResponseBody";
import { filterCardsByRequirement } from "../helpers";

export async function PostSearchAvailableCardsHandler(
  req: express.Request,
  res: express.Response
): Promise<void> {
  try {
    const { body } = req
    const { value, error } = 
      PostSearchAvailableCardsRequestBodySchema.validate(body.data);

    console.log(body)
    if(error) {
      throw new Error(error.message);
    }

    const parsedData = value as PostSearchAvailableCardsRequestBody;
    const availableCards = filterCardsByRequirement(parsedData);
    const result: PostSearchAvailableCardsResponseBody = { 
        cards: availableCards
    }

    res.status(200).json(result);
  } catch (e) {
    res.status(400).json({
      status: "failed",
      message: e.message
    });
  }
}
