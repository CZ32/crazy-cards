import axios from "axios";
import { PostSearchAvailableCardsResponseBody } from "../types";

export const handlePostSearchAvailableCards = async (formData: FormData) => {

  const response = await axios.post("http://localhost:3001/search/cards", {
    data: formData,
  });

  const cards = response.data as PostSearchAvailableCardsResponseBody

  return cards;
};
