import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Expandable = (props) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{props.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {props.children}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

export default Expandable;