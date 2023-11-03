import PropTypes from "prop-types";
import {app} from "../config/firebase";
import {getFirestore, collection, deleteDoc, doc} from "firebase/firestore";
const db = getFirestore(app);
const collectionExpenses = collection(db, "expenses");

const CardTransaction = ({data}) => {
  const deleteTransaction = async (id) => {
    const transactionDoc = doc(collectionExpenses, id);
    await deleteDoc(transactionDoc);
  };
  const dateFormatBr = (createdAt) => {
    if (createdAt) {
      const date = createdAt.toDate();
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      const dateTimeFormat = new Intl.DateTimeFormat("pt-BR", options);
      return dateTimeFormat.format(date);
    }
  };

  const {price, purchasedIn, description, responsible, createdAt} = data.data();
  return (
    <li className="transactions">
      <p className="price">
        Preço:{" "}
        <span className="span-price">
          {" "}
          {price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})}
        </span>
      </p>
      <p>Comprado em: {purchasedIn} </p>
      <p>Descrição: {description}</p>
      <p>Responsável: {responsible}</p>
      <p>CreatedAt: {dateFormatBr(createdAt)}</p>
      <div className="icons">
        <i className="fa-solid fa-pen-to-square"></i>
        <i
          className="fa-solid fa-trash"
          onClick={() => deleteTransaction(data.id)}
        ></i>
      </div>
    </li>
  );
};

CardTransaction.propTypes = {
  data: PropTypes.any,
};

export {CardTransaction};
