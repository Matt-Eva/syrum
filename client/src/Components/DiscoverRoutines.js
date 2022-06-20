import { useState, useEffect } from "react";
import RoutineCard from "./RoutineCard";
import { Box, Grid, Typography } from "@mui/material";
import DiscoverRoutineCard from "./DiscoverRoutineCard";
import { styled } from "@mui/material/styles";
import * as React from "react";
import PropTypes from "prop-types";

// function Item(props) {
//   const { sx, ...other } = props;
//   return (
//     <Box
//       sx={{
//         p: 1,
//         m: 1,
//         bgcolor: (theme) =>
//           theme.palette.mode === "dark" ? "#101010" : "grey.100",
//         color: (theme) =>
//           theme.palette.mode === "dark" ? "grey.300" : "grey.800",
//         border: "1px solid",
//         borderColor: (theme) =>
//           theme.palette.mode === "dark" ? "grey.800" : "grey.300",
//         borderRadius: 2,
//         fontSize: "0.875rem",
//         fontWeight: "700",
//         ...sx,
//       }}
//       {...other}
//     />
//   );
// }

// Item.propTypes = {
//   /**
//    * The system prop that allows defining system overrides as well as additional CSS styles.
//    */
//   sx: PropTypes.oneOfType([
//     PropTypes.arrayOf(
//       PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
//     ),
//     PropTypes.func,
//     PropTypes.object,
//   ]),
// };

const DiscoverRoutines = ({ user }) => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch("/discover-routines")
      .then((r) => r.json())
      .then((data) => setRoutines(data));
  }, []);

  console.log(routines);

  const randomRoutineList = routines.map((routine) => {
    return (
      <DiscoverRoutineCard
        routine={routine}
        key={routine.id}
        viewedUserId={user.id}
      />
    );
  });

  return (
    <>
      <div style={{ width: "100%" }}>
        {/* <Typography>Discover New Routines</Typography> */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            // flexDirection: "row",
            p: 1,
            m: 1,
            bgcolor: "background.paper",
            borderRadius: 1,
            justifyContent: "center",
          }}
        >
          {randomRoutineList}
          {/* <Item>{randomRoutineList}</Item> */}
          {/* <Item>Item 2</Item>
          <Item>Item 3</Item> */}
        </Box>
      </div>
    </>
  );
};

export default DiscoverRoutines;
