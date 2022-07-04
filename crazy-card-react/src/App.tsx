import "./App.css";
import { Form } from "./Components/Form";
import {
  AppState,
  FormData,
  PostSearchAvailableCardsResponseBody,
} from "./types";
import { useEffect, useReducer, useState } from "react";
import { handlePostSearchAvailableCards } from "./api";
import { PostSearchAvailableCardsRequestBodySchema } from "./schema";
import { AvailableCardResults } from "./Components/AvailableCardResultScreen";

const initialState: AppState = {
  screen: "form",
  formData: {
    employmentStatus: undefined,
    income: {
      currency: "GBP",
      unitAmount: undefined,
    },
    address: {
      houseNumber: undefined,
      postCode: undefined,
    },
    dateOfBirth: undefined,
  },
  availableCards: undefined,
};

const reducer = (
  state: AppState,
  action: {
    type: string;
    formData?: Partial<FormData>;
    cards?: AppState["availableCards"];
  }
): AppState => {
  switch (action.type) {
    case "SET_VALUE": {
      return {
        ...state,
        formData: {
          ...state.formData,
          ...action.formData,
        },
      };
    }
    case "SET_RESULT": {
      return {
        ...state,
        availableCards: action.cards,
      };
    }
    case "GO_BACK_TO_FORM": {
      return {
        ...state,
        screen: "form",
      };
    }
    case "SET_RESULT_SCREEN": {
      return {
        ...state,
        screen: "results",
      };
    }
    default:
      return state;
  }
};

const validatedFormData = (formData: FormData) => {
  return PostSearchAvailableCardsRequestBodySchema.validate(formData, {
    abortEarly: false,
  });
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSubmittable, setIsSubmittable] = useState(false);

  useEffect(() => {
    const { error } = validatedFormData(state.formData);
    if (!error) {
      setIsSubmittable(true);
    } else {
      setIsSubmittable(false);
    }
  }, [state.formData]);

  useEffect(() => {
    if (state.screen === "form" && state.availableCards)
      dispatch({ type: "SET_RESULT_SCREEN" });
  }, [state.availableCards]);

  const handleSubmit = async () => {
    try {
      const { value: validatedData, error } = validatedFormData(state.formData);

      if (error) {
        console.debug(error);
        throw new Error(error.message);
      }

      const { cards } = await handlePostSearchAvailableCards(validatedData);

      dispatch({ type: "SET_RESULT", cards });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="app">
      <header className="appContainer">
        <h1>Crazy Card App</h1>
        <div className="baseCard">
          {state.screen === "form" && (
            <Form
              formData={state.formData}
              onChange={(formData: Partial<FormData>) =>
                dispatch({ type: "SET_VALUE", formData })
              }
              onSubmit={handleSubmit}
              isSubmittable={isSubmittable}
            />
          )}

          {state.screen === "results" && state.availableCards && (
            <AvailableCardResults 
            cards={state.availableCards}
            onGoBack={() => dispatch({ type: "GO_BACK_TO_FORM" })}
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
