import { useState, useEffect } from "react";
import FavoriteCard from "./FavoriteCard";
import { Box, Button, CardActions, Link } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";

const FavoritedRoutines = ({ user }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(`/favorites`)
      .then((r) => r.json())
      .then((data) => setFavorites(data));
  }, []);

  //   const favList = favorites.map((favorite) => {
  //     return <FavoriteCard favorite={favorite} key={favorite.id} />;
  //   });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 1,
          py: 1,
          overflow: "auto",
          width: 700,
          scrollSnapType: "x mandatory",
          "& > *": {
            scrollSnapAlign: "center",
          },
          "::-webkit-scrollbar": { display: "none" },
        }}
      >
        {favorites.map((item) => (
          <Card
            row
            key={item.title}
            variant="outlined"
            sx={{
              gap: 2,
              "--Card-padding": (theme) => theme.spacing(2),
            }}
          >
            <AspectRatio
              ratio="3"
              //   minHeight={150}
              //   maxHeight={200}
              sx={{ minWidth: 150, borderRadius: "sm", overflow: "auto" }}
            >
              <Box sx={{ whiteSpace: "nowrap" }}>
                <Link
                  href={`/users/${item.user.id}/routine-details/${item.id}`}
                  fontWeight="md"
                >
                  {item.title}
                </Link>
              </Box>
            </AspectRatio>
          </Card>
        ))}
      </Box>
      {/* <div style={{ width: "100%" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            // flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 4,
            justifyContent: "center",
          }}
        >
          {favList}
        </Box>
      </div> */}
    </>
  );
};

export default FavoritedRoutines;
