import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddSteps = ({ user, routineId }) => {
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
      // change me
      product_id: 1,
      instructions: formData.instructions
    };
    fetch(`/users/${user.id}/routines/${routineId}/steps`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStep),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
    // navigate("/add-steps");
    // get form data
    // post to backend
    // get id of new routine
    // navigate to /users/1/routines/{new_id}
  };

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
        {/* <input
          onChange={handleChange}
          type="text"
          name="three"
          placeholder="Step 3"
          value={formData.three}
        /> */}
        {/* <AddStep routineId={routineId} /> */}
        <button type="submit">Complete your Routine!</button>
      </form>
    </>
  );
};

export default AddSteps;
