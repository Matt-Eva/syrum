import { useState, useEffect } from "react";
import { Box, Link } from "@mui/material";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";

const FavoritedRoutines = ({ user }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch(`/favorites`)
      .then((r) => r.json())
      .then((data) => setFavorites(data));
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          py: 5,
          overflow: "auto",
          width: 750,
          //   border: 5,
          //   borderColor: 'text.primary',
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
              // minHeight={150}
              // maxHeight={200}
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
    </>
  );
};

export default FavoritedRoutines;
