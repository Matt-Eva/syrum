import { Button, Typography, FormControl, TextField, Box, Container } from "@mui/material";

const NewRoutine = ({ addNewRoutine, setFormData, formData }) => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <FormControl onSubmit={addNewRoutine}>
        <Container align='center' maxWidth='md'>
          <Box
            component="form"
            mt={2}
            bgcolor="primary.main"
            // align="center"
            // justify="center"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
              alignItems: "center",
              alignContent: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <Typography id="routine-form" variant="h6" component="h2">
              Create Your New Routine. Add steps on the next page!
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
            <Button type="submit" variant="contained">
              Create Routine
            </Button>
          </Box>
        </Container>
      </FormControl>
    </>
  );
};

export default NewRoutine;
