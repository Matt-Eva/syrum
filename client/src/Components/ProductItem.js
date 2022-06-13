import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductItem = ({ product, user }) => {
  const { name, brand, ingredients, notes, image } = product;

  const handleDelete = (e) => {
    fetch(`/users/${user.id}/products/${product.id}`, {
      method: "DELETE",
    });
    // deleteProduct(product)
  };

  const editProduct = () => {
    console.log("edit this product!");
  };
  return (
      <>
       <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Product: {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Brand: {brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ingredients: {ingredients}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={editProduct}>
          Edit Product
        </Button>
        <Button size="small" onClick={() => handleDelete()}>
          Delete Product
        </Button>
      </CardActions>
      </>
    );
};

export default ProductItem;

//    <Card variant="outlined">
//             <h1>PRODUCT</h1>
//             <h3>{name}</h3>
//             <h3>{brand}</h3>
//             <h3>{ingredients}</h3>
//             <h3>{notes}</h3>
//             <img src={image} alt={name} />
//             <button onClick={() => handleDelete()}>delete</button>
//             <button onClick={editProduct}>edit</button>
//             </Card>
