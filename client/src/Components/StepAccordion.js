import {
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const StepAccordion = ({ step }) => {
  const { number, instructions, product } = step;

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Step {number}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{instructions}</Typography>
          <Typography>{product.name}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default StepAccordion;
