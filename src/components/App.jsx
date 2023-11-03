import {useEffect, useState} from "react";
import {MagicMotion} from "react-magic-motion";
import {ErrorBoundary} from "react-error-boundary";
import "../App.css";
import {AddTransaction} from "./AddTransaction";
import {CardTransaction} from "./CardTransaction";
import {app} from "../config/firebase";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";
const db = getFirestore(app);
const collectionExpenses = collection(db, "expenses");
const orderQuery = query(collectionExpenses, orderBy("createdAt", "desc"));

const App = () => {
  const [transactionData, setTransactionData] = useState([]);
  const addTransaction = (data) => {
    setTransactionData([...transactionData, data]);
  };

  useEffect(() => {
    const getTransactions = async () => {
      onSnapshot(orderQuery, (querySnapshot) => {
        const data = querySnapshot.docs.map((data) => data);
        if (!querySnapshot.metadata.hasPendingWrites) {
          setTransactionData(data);
        }
      });
    };
    getTransactions();
  }, []);

  return (
    <ErrorBoundary>
      <MagicMotion>
        <h1>Controle finaceiro</h1>
        <AddTransaction addTransaction={addTransaction} />
        <div className="container-total-prices">
          <span>Total:</span>
          <p className="total-prices">
            {transactionData
              .reduce((total, data) => {
                return total + data.data().price;
              }, 0)
              .toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
          </p>
        </div>
        <ul>
          {transactionData.map((data, index) => (
            <CardTransaction key={index} data={data} />
          ))}
        </ul>
      </MagicMotion>
    </ErrorBoundary>
  );
};

export default App;
