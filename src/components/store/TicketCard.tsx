import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { Event } from '../../types/Event';
import { StyledCard } from './style';

interface TicketCardProps {
  event: Event;
  onClick: () => void;
}


const TicketCard: React.FC<TicketCardProps> = ({ event, onClick }) => {
  return (
    <StyledCard onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="160"
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
    </StyledCard>
  );
};

export default TicketCard;