export const AddTransaction = () => {
  const submitForm = (e) => {
    e.preventDefault();
    console.log(e.target.form.price.value);
    console.log(e.target.form.date.value);
    console.log(e.target.form.description.value);
    console.log(e.target.form.responsible.value);
    e.target.form.reset();
  };
  return (
    <div className="formContainer">
      <form action="">
        <input type="text" name="price" placeholder="Digite o valor" />
        <input type="date" name="date" id="" />
        <input type="text" name="description" id="" placeholder="Descrição" />
        <input type="text" name="responsible" id="" placeholder="Responsável" />
        <button type="submit" onClick={submitForm}>
          Adicionar
        </button>
      </form>
    </div>
  );
};
