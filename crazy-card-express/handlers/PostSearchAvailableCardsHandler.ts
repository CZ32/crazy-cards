import { PostSearchAvailableCardsResponseBody } from "../contracts/PostSearchAvailableCardsResponseBody";
import { cardData } from "../data";

export async function PostSearchAvailableCardsHandler (req: Express.Request, res: Express.Response): Promise<PostSearchAvailableCardsResponseBody> {
    return { cards: cardData }
}