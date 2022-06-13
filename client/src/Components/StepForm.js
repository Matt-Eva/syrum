import { useState } from "react";

const StepForm = ({ handleStep, products }) => {
  const [stepFormData, setStepFormData] = useState({
    number: "",
    routine_id: "",
    instructions: "",
    product_id: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setStepFormData({ ...stepFormData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleStep(stepFormData);
    setStepFormData({
      number: "",
      // routine_id: "",
      instructions: "",
      product_id: "",
    })
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="number"
          placeholder="Step Number"
          value={stepFormData.number}
        />
        <input
          onChange={handleChange}
          type="text"
          name="instructions"
          placeholder="instructions"
          value={stepFormData.instructions}
        />
        <label>
          <select
            name={"product_id"}
            value={stepFormData.product_id}
            onChange={handleChange}
          >
            <option>Select a product from your products</option>
            {products
              ? products.map((product) => {
                  return (
                    <>
                      <option value={product.id} key={product.id}>
                        {product.name}
                      </option>
                    </>
                  );
                })
              : null}
          </select>
        </label>
        <button type="submit">Add Step</button>
      </form>
    </>
  );
};

export default StepForm;
