import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import { Event } from '../../types/Event';
import StyledCard from './style';

interface TicketCardProps {
    event: Event;
  }

const TicketCard: React.FC<TicketCardProps> = ({ event }) => {
  return (
    <StyledCard>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {event.eventName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            By : {event.vendor.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="outlined">
          Book [${event.ticketPrice}]
        </Button>
      </CardActions>
    </StyledCard>
  );
}

export default TicketCard;