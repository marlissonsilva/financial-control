import {AddTransaction} from "./components/AddTransaction";
import {CardTransaction} from "./components/CardTransaction";
import "./App.css";

const App = () => {
  return (
    <>
      <h1>Controle finaceiro</h1>
      <AddTransaction />
      <ul>
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
        <CardTransaction />
      </ul>
    </>
  );
};

export default App;
