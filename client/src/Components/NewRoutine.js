import {
  Button,
  Typography,
  FormControl,
  TextField,
  Box,
  Container,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const NewRoutine = ({ addNewRoutine, setFormData, formData }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <FormControl onSubmit={addNewRoutine}>
        <Container align="center" maxWidth="xs">
          <Box
            component="form"
            mt={3}
            // bgcolor="primary.main"
            // align="center"
            // justify="center"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              alignItems: "center",
              alignContent: "center",
              justifyItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <Typography id="routine-form" variant="h6" component="h2">
              Create Your New Routine
            </Typography>
            <TextField
              variant="outlined"
              label="Title"
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Routine Title"
              value={formData.title}
            />
            <TextField
              variant="outlined"
              label="Description"
              onChange={handleChange}
              type="text"
              name="description"
              placeholder="Routine description"
              value={formData.description}
            />
            {/* <FormControl>
              <InputLabel id="select-emoji">Select an Emoji</InputLabel>
              <Select
                labelId="select-emoji"
                id="select-emoji"
                name="emoji"
                value={"emoji"}
                onChange={handleChange}
                label="Emoji"
              >
                <MenuItem value={"emojiiiii"} >
                &#x1F324;
                </MenuItem>
              </Select>
            </FormControl> */}
            <Button type="submit" variant="contained" size="large">
              Create Routine
            </Button>
          </Box>
        </Container>
      </FormControl>
    </>
  );
};

export default NewRoutine;
