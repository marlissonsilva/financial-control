import {useState} from "react";
import PropTypes from "prop-types";
import {app} from "../config/firebase";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
const db = getFirestore(app);
const collectionExpenses = collection(db, "expenses");

const AddTransaction = () => {
  const [formData, setFormData] = useState({
    price: "",
    purchasedIn: "",
    description: "",
    responsible: "",
  });

  const submitForm = (e) => {
    e.preventDefault();
    setFormData({
      price: "",
      date: "",
      description: "",
      responsible: "",
    });
  };

  const addDatasInFirebase = async () => {
    try {
      const transaction = await addDoc(collectionExpenses, {
        price: Number(formData.price),
        purchasedIn: formData.purchasedIn,
        description: formData.description,
        responsible: formData.responsible,
        createdAt: serverTimestamp(),
      });
      console.log("Document adicionado", transaction);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  return (
    <div className="formContainer">
      <form onSubmit={submitForm}>
        <input
          type="number"
          name="price"
          step=".01"
          placeholder="Digite o valor"
          value={formData.price}
          onChange={handleChange}
        />
        <input
          type="date"
          name="purchasedIn"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Descrição"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="responsible"
          placeholder="Responsável"
          value={formData.responsible}
          onChange={handleChange}
        />
        <button type="submit" onClick={addDatasInFirebase}>
          Adicionar
        </button>
      </form>
    </div>
  );
};

AddTransaction.propTypes = {
  addTransaction: PropTypes.func.isRequired,
};
export {AddTransaction};
