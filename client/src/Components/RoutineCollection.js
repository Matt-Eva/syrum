import { useState, useEffect } from "react";
import RoutineCard from "./RoutineCard";
import { Container, Box, Tabs, Tab, Typography } from "@mui/material";
import PropTypes from 'prop-types';
import ProductCollection from "./ProductCollection";
import TabPanel from "./TabPanel";


const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const RoutineCollection = ({ user, viewedUserId }) => {
  const [routines, setRoutines] = useState([]);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    fetch(`/users/${viewedUserId}/routines`).then((r) => {
      if (r.ok) {
        r.json().then((routines) => setRoutines(routines));
      }
    });
  }, [viewedUserId]);

  const routineList = routines.map((routine) => {
    return (
      <RoutineCard
        routine={routine}
        key={routine.id}
        viewedUserId={viewedUserId}
      />
    );
  });

  return (
    // <Container sx={{ pt: 4 }} maxWidth="xl">
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Routines" {...a11yProps(0)} />
          <Tab label="Products" {...a11yProps(1)} />
          {/* <Tab label="Followers" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {routineList}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {<ProductCollection user={user} />}
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        Item Three
      </TabPanel> */}
    </Box>
    // </Container>
  );
};

export default RoutineCollection;
