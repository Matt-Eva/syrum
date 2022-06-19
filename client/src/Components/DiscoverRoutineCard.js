import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import {
  CardContent,
  Typography,
  Button,
  CardActions,
  Box,
  Card,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const DiscoverRoutineCard = ( { routine } ) => {
    const { id, title, user } = routine;

    console.log(user)

    const visitProfile = () => {
        console.log('profuleeee')
    }
    return (
    //     <Box
    //     sx={{
    //       width: 200,
    //       height: 200,
    //     }}
    //   >
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 20 }} gutterBottom>
              {user.username}'s
            </Typography>
            <Typography variant="h5" component="div">
              {title}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button variant='contained' onClick={visitProfile} size="small">
              Visit Profile
            </Button>
          </CardActions>
        </Card>
    //   </Box>
    )

}

export default DiscoverRoutineCard