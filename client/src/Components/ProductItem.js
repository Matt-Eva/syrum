import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  ImageListItem,
  ImageListItemBar,
  Modal,
  Typography,
  Box,
} from "@mui/material";

const ProductItem = ({ product, user, deleteProduct, viewedUserId }) => {
  const { id, name, brand, ingredients, notes, image } = product;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let navigate = useNavigate();

  const handleDelete = (e) => {
    fetch(`/users/${user.id}/products/${product.id}`, {
      method: "DELETE",
    });
    deleteProduct(product);
  };

  const handleEdit = (e) => {
    console.log("edit me!");
    navigate(`/edit-product/${product.id}`);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const showRemove = () => {
    return user.id === parseInt(viewedUserId)
  }

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Name: {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Ingredients: {ingredients}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            My notes: {notes}
          </Typography>
          {showRemove() && <Button onClick={handleEdit}>Edit Product</Button>}
          {showRemove() &&<Button onClick={handleDelete}>Delete Product</Button>}
        </Box>
      </Modal>

      <ImageListItem key={id} onClick={handleOpen}>
        <img src={`${image}`} srcSet={`${image}`} alt={name} loading="lazy" />
        <ImageListItemBar
          title={name}
          subtitle={<span>from: {brand}</span>}
          position="below"
          align="center"
        />
      </ImageListItem>
    </>
  );
};

export default ProductItem;
