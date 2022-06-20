import { useState } from "react";
import { Container, Box, Tabs, Tab, Card } from "@mui/material";
import ProductCollection from "./ProductCollection";
import TabPanel from "./TabPanel";
import RoutineCollection from "./RoutineCollection";
import Followers from "./Followers";

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

const ProfileTabs = ({ user, viewedUserId }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Card pt={2}>
      <Container maxWidth="xl" sx={{ pt: 1 }}>
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
            {<RoutineCollection user={user} viewedUserId={viewedUserId} />}
          </TabPanel>
          <TabPanel value={value} index={1}>
            {<ProductCollection user={user} viewedUserId={viewedUserId} />}
          </TabPanel>
          {/* <TabPanel value={value} index={2}>
          {<Followers />}
        </TabPanel> */}
        </Box>
      </Container>
    </Card>
  );
};

export default ProfileTabs;
