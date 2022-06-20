import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import DiscoverRoutineCard from "./DiscoverRoutineCard";

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
        </Box>
      </div>
    </>
  );
};

export default DiscoverRoutines;
