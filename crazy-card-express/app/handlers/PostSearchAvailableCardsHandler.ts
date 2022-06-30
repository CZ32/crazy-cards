import Express from "express";
import {
  PostSearchAvailableCardsRequestBody,
  PostSearchAvailableCardsRequestBodySchema,
} from "../contracts/PostSearchAvailableCardsRequestBody";
import { PostSearchAvailableCardsResponseBody } from "../contracts/PostSearchAvailableCardsResponseBody";
import { filterCardsByRequirement } from "../helpers";

export async function PostSearchAvailableCardsHandler(
  req: Express.Request,
  res: Express.Response
): Promise<PostSearchAvailableCardsResponseBody> {
  try {
    const { data } = req.body;

    const { value, error } =
      PostSearchAvailableCardsRequestBodySchema.validate(data);

    if (error) {
      throw new Error(error.message);
    }

    const parsedData = value as PostSearchAvailableCardsRequestBody;

    const availableCards = filterCardsByRequirement(parsedData);

    return { cards: availableCards };
  } catch (e) {
    res.json({
      status: "failed",
      message: e,
    });
  }
}
