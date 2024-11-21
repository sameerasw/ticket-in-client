import { Card } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)(({ theme }) => ({
    // padding: theme.spacing(2),
    margin: theme.spacing(1),
    borderRadius: 10,
    backgroundColor: theme.palette.background.paper,
    maxWidth: 345,
}));

export default StyledCard;