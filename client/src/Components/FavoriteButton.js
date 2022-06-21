import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect } from "react";
import { CardActions } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const FavoriteButton = ({ routine }) => {
  const { id, title, user_id } = routine;

  console.log(routine);

  const [favorited, setFavorited] = useState(routine.favorited);

  const favRoutine = (e) => {
    if (favorited) {
      fetch(`/favorites/${favorited}`, {
        method: "DELETE",
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => console.log(data));
        } else {
          r.json().then((err) => console.log(err.errors));
        }
      });
    } else {
      fetch(`/favorites`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          routine_id: routine.id,
        }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((data) => {
            console.log(data);
            setFavorited(data.id);
          });
        } else {
          r.json().then((err) => console.log(err.errors));
        }
      });
      // console.log('fav false = setting to true')
      // setFavorited(true)
    }
  };

  console.log(favorited);

  return (
    <>
      <CardActions sx={{ justifyContent: "center" }}>
        <ToggleButton
          value="check"
          selected={favorited !== null}
          onChange={favRoutine}
        >
          <FavoriteIcon />
        </ToggleButton>
      </CardActions>
    </>
  );
};

export default FavoriteButton;
