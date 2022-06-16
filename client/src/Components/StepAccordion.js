import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
  ImageListItem,
  ImageList,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container } from "@mui/system";

const StepAccordion = ({ step }) => {
  const { number, instructions, product } = step;

  return (
    <div>
      <Container maxWidth="sm">
        <Box pt={1} pb={1}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Step {number}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ImageList>
                <Typography>{instructions}</Typography>
                <ImageListItem>
                  <img
                    src={`${product.image}`}
                    srcSet={`${product.image}`}
                    alt={product.name}
                    loading="lazy"
                  ></img>
                </ImageListItem>
              </ImageList>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </div>
  );
};

export default StepAccordion;
