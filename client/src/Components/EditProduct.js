import ProductForm from "./ProductForm";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const EditProduct = ( { user } ) => {
  const [currentProduct, setCurrentProduct] = useState("");
  const product = useParams();

  useEffect(() => {
    fetch(`/users/${user.id}/products/${product.id}`).then((r) => {
      if (r.ok) {
        r.json().then((product) => setCurrentProduct(product));
      }
    });
  }, [product.id, user.id]);

  const editproduct = (productObj) => {
    fetch(`/users/${user.id}/products/${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(productObj),
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          console.log("success");
        });
      } else {
        res.json().then((json) => console.log("wrong"));
      }
    });
  };

  return (
      <div>
          <ProductForm submitFun={editproduct} user={user} />
      </div>
  )
};

export default EditProduct;
