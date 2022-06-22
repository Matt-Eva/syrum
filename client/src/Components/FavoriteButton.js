import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
import { CardActions } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";

const FavoriteButton = ({ routine }) => {
  const [favorited, setFavorited] = useState(routine.favorited);

  const favRoutine = (e) => {
    console.log(routine);
    console.log(favorited);
    if (favorited) {
      fetch(`/favorites/${favorited}`, {
        method: "DELETE",
      }).then((r) => {
        console.log(r);
        // if (r.ok) {
        //   r.json().then((data) => console.log(data));
        // } else {
        //   r.json().then((err) => console.log(err.errors));
        // }
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
    }
  };

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
