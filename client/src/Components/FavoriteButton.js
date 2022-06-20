import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState, useEffect } from "react";
import { CardActions } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";

const FavoriteButton = ({ routine }) => {
  const { id, title, user } = routine;

  console.log(routine)

  const [favorited, setFavorited] = useState(false);

//   const favoriteRoutine = (e) => {
//     console.log("fav me!");
//     console.log(e.target);

//     fetch(`/favorites`, {
//       method: 'POST',
//       headers: {
//         "Content-type": "application/json",
//       },
//       body: JSON.stringify({
//         routine_id: routine.id
//       }),
//     }).then((r) => {
//       if (r.ok) {
//         r.json().then((user) => setFavorited(true));
//       } else {
//         r.json().then((err) => console.log(err.errors));
//       }
//     });
//     if (!favorited) {
//       setFavorited(true);
//     } else {
//       return null;
//     }
//   };

  const unfavoriteRoutine = (e) => {
    console.log("unfav me");
    console.log(e.target);
    if (favorited) {
      setFavorited(false);
    } else {
      return null;
    }
  };

    const favRoutine = (e) => {
      if (favorited) {
        setFavorited(false);
        console.log(routine)
        // fetch(`/favorites/${favorite.id}`, {
        //     method: 'DELETE'
        // });
        // setFavorited(false)

      } else {
        fetch(`/favorites`, {
            method: 'POST',
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({
              routine_id: routine.id
            }),
          }).then((r) => {
            if (r.ok) {
              r.json().then((user) => setFavorited(true));
            } else {
              r.json().then((err) => console.log(err.errors));
            }
          });
        console.log('fav false = setting to true')
        setFavorited(true)
      }
    };

    console.log(favorited)

  return (
    <>
      <CardActions sx={{ justifyContent: "center" }}>
        <ToggleButton
          value="check"
          selected={favorited}
          onChange={favRoutine}
        >
          <FavoriteIcon />
        </ToggleButton>
      </CardActions>
    </>
  );
};

export default FavoriteButton;
