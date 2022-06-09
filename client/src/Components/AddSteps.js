import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddSteps = ({ user, routineId, products }) => {
  const [formData, setFormData] = useState("");

  let navigate = useNavigate()


  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    console.log(e.target.value);
    e.preventDefault();
    console.log(e.target.value);
    const newStep = {
      number: formData.one,
      routine_id: routineId,
      instructions: formData.instructions,
      product_id: formData.product_id
    };
    fetch(`/users/${user.id}/routines/${routineId}/steps`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStep),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        navigate('/my-profile')

      });
    // navigate("/add-steps");
    // get form data
    // post to backend
    // get id of new routine
    // navigate to /users/1/routines/{new_id}
  };
  console.log(formData)
  console.log(products)

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          name="one"
          placeholder="Step 1"
          value={formData.one}
        />
        <input
          onChange={handleChange}
          type="text"
          name="instructions"
          placeholder="instructions"
          value={formData.instructions}
        />
        <label>
        <select name={'product_id'} value={formData.product_id} onChange={handleChange}>
         <option>Select a product from your products</option>
         {products.map(
                  (product) => {
                    return (
                        <>
                        <option value={product.id} key={product.id}>
                            {product.name}
                        </option>
                        </>
                    )}
                  )}
         </select>
        </label>
        <button type="submit">Complete your Routine!</button>
      </form>
    </>
  );
};

export default AddSteps;
