import logo from './logo.svg';
import './App.css';
import { Form } from './Form'
import { Card } from './types';
//Form
//Result
//Card

interface TState {
  screen: 'form' | 'pending' | "results" | 'card'
  formData: {

  },
  results: undefined | Card[]
}

function App() {
  return (
    <div className="app">
      <header className="appContainer">
        <h1>Crazy Card App</h1>
        <Form />
      </header>
    </div>
  );
}

export default App;
