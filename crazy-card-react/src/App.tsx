import logo from "./logo.svg";
import "./App.css";
import { Form } from "./Components/Form";
import { AppState, FormData, PostSearchAvailableCardsResponseBody } from "./types";
import { useReducer } from "react";
import { handlePostSearchAvailableCards } from "./api";
import { PostSearchAvailableCardsRequestBodySchema } from "./schema";

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
  results: undefined,
};

const reducer = (
  state: AppState,
  action: {
    type: string;
    formData?: Partial<FormData>;
    cards?: AppState["results"];
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
    case "SET_RESULT" : {
      return {
        ...state,
        results: action.cards
      };
    }
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = async () => {
    console.log(state.formData)
    const { value: validatedFormData, error } =
      PostSearchAvailableCardsRequestBodySchema.validate(state.formData, {
        abortEarly: false,
      });
  
    if (error) {
      return undefined;
    }
  
    const result = await handlePostSearchAvailableCards(validatedFormData)

    dispatch({ type: "SET_RESULT", cards: result.cards })
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
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
