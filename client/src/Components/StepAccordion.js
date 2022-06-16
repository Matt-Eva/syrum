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
  console.log(product);

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
              {/* <Typography>{product.name}</Typography> */}
              <ImageList>
                <Typography>{instructions}</Typography>
                <ImageListItem>
                  <img
                    src={`${product.image}`}
                    srcSet={`${product.image}`}
                    alt={product.name}
                    loading="lazy"
                  ></img>
                  {/* <img
                    src={`${product.image}?w=248&fit=crop&auto=format`}
                    srcSet={`${product.image}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={product.name}
                    loading="lazy"
                  ></img> */}
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
