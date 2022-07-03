import logo from "./logo.svg";
import "./App.css";
import { Form } from "./Form";
import { AppState, FormData } from "./types";
import { useReducer } from "react";

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
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

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
            />
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
