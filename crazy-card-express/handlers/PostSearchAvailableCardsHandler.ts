export async function PostSearchAvailableCardsHandler (req: Express.Request, res: Express.Response): Promise<PostSearchAvailableCardsResponseBody> {
    return { cards: cardData }
}