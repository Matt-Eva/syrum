import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button, ImageListItem, ImageListItemBar } from "@mui/material";

const ProductItem = ({ product, user }) => {
  const { id, name, brand, ingredients, notes, image } = product;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const deleteProduct = (e) => {
    fetch(`/users/${user.id}/products/${product.id}`, {
      method: "DELETE",
    });
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
            {name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {notes}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {ingredients}
          </Typography>
          <Button>Edit Product</Button>
          <Button onClick={deleteProduct}>Delete Product</Button>
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
