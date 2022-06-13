import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import StepForm from "./StepForm";

const AddSteps = ({ user, routineId }) => {
  // const [stepFormData, setStepFormData] = useState({
  //   number: '',
  //   routine_id: '',
  //   instructions: '',
  //   product_id: ''
  // });
  const [products, setProducts] = useState('')


  let navigate = useNavigate()

  useEffect(() => {
    fetch(`/users/${user.id}/products`).then((r) => {
      if (r.ok) {
        r.json().then((products) => setProducts(products));
      }
    });
  }, []);

  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   const name = e.target.name;
  //   setStepFormData({ ...stepFormData, [name]: value });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(routineId);
  //   const newStep = {
  //     number: stepFormData.number,
  //     routine_id: routineId,
  //     instructions: stepFormData.instructions,
  //     product_id: stepFormData.product_id
  //   };
  //   fetch(`/users/${user.id}/routines/${routineId}/steps`, {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newStep),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       console.log(data);
  //       // setStepFormData({
  //       //   number: '',
  //       //   routine_id: routineId,
  //       //   instructions: '',
  //       //   product_id: ''
  //       // })
  //     });
  // };

  const createStep = (stepData) => {
    const newStep = {
      number: stepData.number,
      routine_id: routineId,
      instructions: stepData.instructions,
      product_id: stepData.product_id
    };
    fetch(`/users/${user.id}/routines/${routineId}/steps`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStep),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // setStepFormData({
        //   number: '',
        //   routine_id: routineId,
        //   instructions: '',
        //   product_id: ''
        // })
      });
  }

  return (
    // <>
    //   <form onSubmit={handleSubmit}>
    //     <input
    //       onChange={handleChange}
    //       type="number"
    //       name="number"
    //       placeholder="Step Number"
    //       value={stepFormData.number}
    //     />
    //     <input
    //       onChange={handleChange}
    //       type="text"
    //       name="instructions"
    //       placeholder="instructions"
    //       value={stepFormData.instructions}
    //     />
    //     <label>
    //     <select name={'product_id'} value={stepFormData.product_id} onChange={handleChange}>
    //      <option>Select a product from your products</option>
    //      {products ? products.map(
    //               (product) => {
    //                 return (
    //                     <>
    //                     <option value={product.id} key={product.id}>
    //                         {product.name}
    //                     </option>
    //                     </>
    //                 )}
    //               ) : null }
    //      </select>
    //     </label>
    //     <button type="submit" onClick={handleSubmit}>Add another step!</button>
    //     <button type="submit" onClick={handleSubmit}>Complete your Routine!</button>
    //   </form>
    // </>
    <>
    <StepForm  handleStep={createStep} routineId={routineId} products={products}/>
    <StepForm  handleStep={createStep} routineId={routineId} products={products}/>

    </>
  );
};

export default AddSteps;
