import logo from './logo.svg';
import './App.css';
import { Form } from './Form'
import { Card, AppState } from './types';
import { useReducer } from 'react';

const initialState: AppState = {
  screen: 'form',
  formData:  {
    employmentStatus: undefined ,
    income: {
      currency: "GBP",
      unitAmount: undefined 
    },
    address: {
      houseNumber: undefined,
      postCode: undefined
    },
    dateOfBirth: undefined
  },
  results: undefined
}

const reducer = (
  state: AppState,
  action: {
    type: 'string',
    payload: Partial<AppState>
  }
): AppState=> {
  return state
}

function App() {
  const [ state, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="app">
      <header className="appContainer">
        <h1>Crazy Card App</h1>
        <div className="baseCard">
          {
            state.screen === 'form' && <Form data={state.formData}/> 
          }
        </div>
      </header>
    </div>
  );
}

export default App;
