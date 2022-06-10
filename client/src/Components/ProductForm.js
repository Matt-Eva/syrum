import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductForm = ({ user }) => {
  let navigate = useNavigate();
  const [productData, setProductData] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setProductData({ ...productData, [name]: value });
  };

  const addNewProduct = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    const newProduct = {
      name: productData.title,
      instructions: productData.instructions,
      brand: productData.brand,
      notes: productData.notes,
      user_id: user.id
    };
    fetch(`/users/${user.id}/products`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    navigate("/my-products");
  };

  return (
    <>
      <form onSubmit={addNewProduct}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Product name"
          value={productData.name}
        />
        <input
          onChange={handleChange}
          type="text"
          name="instructions"
          placeholder="Product instructions"
          value={productData.instructions}
        />
        <input
          onChange={handleChange}
          type="text"
          name="brand"
          placeholder="Product brand"
          value={productData.brand}
        />
        <input
          onChange={handleChange}
          type="text"
          name="notes"
          placeholder="Product notes"
          value={productData.notes}
        />
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default ProductForm;
